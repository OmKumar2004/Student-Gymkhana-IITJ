
import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pg from 'pg';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 5000;

// PostgreSQL database connection
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: '4072',
  port: 5432,
});
db.connect();
app.use(cors())
// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

// Routes

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.post('/auth/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.query(
      'INSERT INTO users_table (username, password) VALUES ($1, $2) RETURNING *',
      [username, hashedPassword]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/auth/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db.query('SELECT * FROM users_table WHERE username = $1', [username]);

    if (user.rows.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.rows[0].id }, 'secretkey', { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
