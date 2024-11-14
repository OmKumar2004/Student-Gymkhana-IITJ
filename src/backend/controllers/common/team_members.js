const express = require("express")
const {connectDB,connectdb} = require("../../database/connection")
const route = express.Router()

route.get('/',connectDB,(req,res)=> {

    try {
    let getQuery = `SELECT tm.*, tg.tag FROM ${req.db}.team_member tm JOIN team_member_tags tg on tm.member_id = tg.member_id ORDER BY tg.tag`
    
    req.conn.query(getQuery,(err,result)=> {

        req.conn.end()
        return res.json(result)
        
    })}
    catch (error) {
        res.status(500).json({message:error})
    }
})

module.exports = route