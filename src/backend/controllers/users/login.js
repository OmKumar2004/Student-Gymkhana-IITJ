// const express = require("express")
// const {connectDB,connectdb} = require("../../database/connection")
// const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512')

// const route = express.Router()

// route.post('/',connectDB,(req,res)=> {

//     try {let loginQuery = `SELECT * FROM ${req.db}.user WHERE pass = '${sha512(req.body.pass)}' and u_name = '${req.body.field}' or mail = '${req.body.field}'`

//     req.conn.query(loginQuery,(err,result)=> {

//         if(result.length == 1) {
//             return res.json(result)
//         }
//         else {
//             req.conn.end()
//             return res.status(401).json({ message: 'Unauthorized' });
//         }
//     })}
//     catch (error) {
//         console.log(error)
//         return res.status(500).json({message:error})
//     }
// })

// module.exports = route
const express = require("express");
const { connectDB } = require("../../database/connection");
const { sha512 } = require('js-sha512');
const jwt = require('jsonwebtoken'); // For generating a token

const route = express.Router();

// Replace with your secret key for JWT
const JWT_SECRET_KEY = "yourSecretKey";

route.post('/', connectDB, (req, res) => {
    try {
        const { field, pass } = req.body;
        const hashedPass = sha512(pass); // Hash the password
        
        const loginQuery = `
            SELECT * FROM ${req.db}.user WHERE (u_name = ? OR mail = ?) AND pass = ?
        `;
        
        req.conn.query(loginQuery, [field, field, hashedPass], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal server error' });
            }
            
            if (result.length === 1) {
                // Generate JWT token
                const user = result[0];  // Assuming result[0] has user data
                const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY, { expiresIn: '1h' });
                
                // Send the token in the response
                return res.json({
                    token, 
                    message: 'Login successful',
                    user: {
                        id: user.id,
                        username: user.u_name,
                        email: user.mail
                    }
                });
            } else {
                return res.status(401).json({ message: 'Unauthorized' });
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
});

module.exports = route;
