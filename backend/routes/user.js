const express = require("express")
const log = require("../utils/log")
const signInWithGoogleRoute = require("../controllers/users/login_with_google")
const signUpWithGoogleRoute = require("../controllers/users/signup_with_google")
const signUpRoute = require("../controllers/users/signup");
const loginRoute = require("../controllers/users/login")
const blogRoute = require("../controllers/users/blog")
const sathiRoute = require("../controllers/users/sathi")

const route = express.Router()

route.use(log)
route.use('/signup',signUpRoute);
route.use('/login',loginRoute);
route.use('/login_with_google',signInWithGoogleRoute);
route.use('/signup_with_google',signUpWithGoogleRoute)
route.use('/sathi',sathiRoute)

route.use('/blogs',blogRoute)



module.exports = route