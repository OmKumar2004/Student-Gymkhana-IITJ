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

    let query = `INSERT INTO ${db}.user (roll_number,u_name,mail,image_url) VALUES ('${profile.name["familyName"].slice(1,-1)}','${profile.name["givenName"]}','${profile.emails[0].value}','${profile.photos[0].value}')`
    connection.query(query,(err,result)=> {
        if(err) {
            return done(err)
        }
        else return done(null,result)
    })
    
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));