const express = require("express")
const {connectdb,connectDB} = require("../../database/connection")
const router = express.Router()

router.get('/',connectDB,(req,res)=> {

    try {
        let getQuery = `SELECT * FROM ${req.db}.event`

        req.conn.query(getQuery,(err,result)=> {

            req.conn.end()
            console.log(result)
            return res.json(result)
        })
    }
    catch (error) {
        // console.log(result)
        return res.status(500).json({message:error})
    }
})

module.exports = router