const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {connectDB,connectdb} = require("../database/connection")

const GOOGLE_CLIENT_ID = '298116097625-2veg9i6a6vtf6h6m171tngifn52lr69k.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
    let [connection,db] = connectdb()
    if(connection == null) return done(err)

    let query = `SELECT * FROM ${db}.user WHERE mail = '${profile.emails[0].value}'`
    connection.query(query,(err,result)=> {
        if(err) {
            return done(err)
        }
        if(result.length == 1){
            return done(null,profile)
        }
        else return done(null,null)
    })
    
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


