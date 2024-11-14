const express = require("express")
const {connectDB,connectdb} = require("../../database/connection")

const route = express.Router()

route.get('/',connectDB,(req,res)=> {

    try {
    let getQuery = `SELECT * FROM ${req.db}.story st ORDER BY st.updated_at`

    req.conn.query(getQuery,(err,result)=> {

        if(err){
            req.conn.end()
            return res.status(500).json({"message":err})
        }
        console.log(result)
        req.conn.end()
        return res.json(result)
    })}
    catch (error) {
        return res.status(500).json({message:error})
    }
})

module.exports = route
