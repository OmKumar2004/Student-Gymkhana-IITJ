const express = require("express")
const userRoute = require("./routes/user")
const commonRoute = require("./routes/common")
const fs = require("fs")
const passport = require('passport')
const session = require('express-session')
const {connectDB,connectdb} = require("./database/connection")
require("./utils/login_with_google")

require("dotenv").config()

app = express()

PORT = process.env.PORT || 3300

app.listen(PORT,() => {
    console.log("Server started at PORT ",PORT);
})
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google/callback',
    (req, res, next) => {
        passport.authenticate('google', (err, user, info) => {
            if (err) {
                return res.status(505).json({ "message": err });
            }
            if (!user) {
                return res.sendStatus(401)
            }
            return res.sendStatus(200)
        })(req, res, next);
    }
);

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/apis/v1/user',userRoute)
app.use('/apis/v1/common',commonRoute)

