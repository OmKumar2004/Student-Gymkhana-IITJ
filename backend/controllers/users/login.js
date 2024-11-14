const express = require("express")
const {connectDB,connectdb} = require("../../database/connection")
const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512')

const route = express.Router()

route.get('/',connectDB,(req,res)=> {

    try {let loginQuery = `SELECT * FROM ${req.db}.user WHERE pass = '${sha512(req.body.pass)}' and u_name = '${req.body.field}' or mail = '${req.body.field}'`

    req.conn.query(loginQuery,(err,result)=> {

        if(result.length == 1) {
            return res.json(result)
        }
        else {
            req.conn.end()
            return res.status(401)
        }
    })}
    catch (error) {
        res.status(500).json({message:error})
    }
})

module.exports = route