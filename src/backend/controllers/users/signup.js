const express = require("express")
const {connectDB,connectdb} = require("../../database/connection")
const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512')

const route = express.Router()

route.post('/',connectDB,(req,res)=> {

try{
    console.log(req.body)
    let signUpQuery = `INSERT INTO ${req.db}.user (roll_number,u_name,mail,pass) values ('${req.body.roll_number}','${req.body.u_name}','${req.body.mail}','${sha512(req.body.pass)}')`

    req.conn.query(signUpQuery,(err,result)=> {

        req.conn.end()
        return res.status(201).json({ message: 'User signed up successfully!' });
    })}
    catch(error) {
        console.log(error)
       return res.status(500).json({message:error})
    }
})

module.exports = route
