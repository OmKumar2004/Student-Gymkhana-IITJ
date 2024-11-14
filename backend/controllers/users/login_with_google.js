const express = require("express")
const passport = require("passport")
require("../../utils/login_with_google")

const route = express.Router()

// Routes for authentication
route.get('/',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

module.exports = route