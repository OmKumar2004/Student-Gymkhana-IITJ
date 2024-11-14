const express = require("express")
const {connectDB,connectdb} = require("../../database/connection")
const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512')

const route = express.Router()

route.post('/',connectDB,(req,res)=> {

try{
    let signUpQuery = `INSERT INTO ${req.db}.user (roll_number,u_name,mail,pass) values ('${req.body.roll_number}','${req.body.u_name}','${req.body.mail}','${sha512(req.body.pass)}')`

    req.conn.query(signUpQuery,(err,result)=> {

        req.conn.end()
        return res.sendStatus(201)

    })}
    catch(error) {
        res.status(500).json({message:error})
    }
})

module.exports = route
