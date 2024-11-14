const express = require("express")
const userRoute = require("./routes/user")
const commonRoute = require("./routes/common")
const fs = require("fs")
const passport = require('passport')
const session = require('express-session')
const {connectDB,connectdb} = require("./database/connection")
const cors = require("cors")
require("./utils/login_with_google")

require("dotenv").config()

const app = express()

PORT = process.env.PORT || 3300

app.listen(PORT,() => {
    console.log("Server started at PORT ",PORT);
})
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// const corsOptions = {
//     origin: 'http://example.com', // replace with your allowed origin
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   };
  
// app.use(cors(corsOptions));
  
// console.log(cors)
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google/callback',
    (req, res, next) => {
        passport.authenticate('google', (err, user, info) => {
            if (err) {
                return res.status(505).json({ "message": err });
            }
            if (!user) {
                return res.status(401).json({message:err})
            }
            return res.status(200).json({message:"Done"})
        })(req, res, next);
    }
);

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/apis/v1/user',userRoute)
app.use('/apis/v1/common',commonRoute)

