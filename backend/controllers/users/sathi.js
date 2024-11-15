const express = require("express")
const upload = require("../../utils/multer_setup")
const uploadFile = require("../../utils/google_upload")
const {connectDB,connectdb} = require("../../database/connection")

const route = express.Router()

route.get('/',connectDB,(req,res)=> {
    
    try {
        let getQuery = `SELECT r.file_url,r.title,r.category,r.description,u.u_name FROM ${req.db}.resource r JOIN ${req.db}.user u on u.u_mail = r.u_mail`

        if(req.headers["X-filter"]) getQuery+=` WHERE r.category LIKE '%${req.headers["X-filter"]}%' or r.title LIKE '${req.headers["X-filter"]}' or r.description LIKE '${req.headers["X-filter"]}'`

        req.conn.query(getQuery,(err,result)=> {

            if(err) return res.status(500).json({message:err})
            
            req.conn.end()
            return res.json(result)

        })
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

route.post('/',upload.single('resource'),uploadFile,connectDB,async (req,res) => {

    try {
        let insertQuery = `INSERT INTO ${req.db}.resource (u_mail,file_url,title,description,category) VALUES ('${req.body.u_mail}','${req.body.image_url}','${req.body.title}','${req.body.description}','${req.body.category}')`

        req.conn.query(insertQuery,(err,result)=> {

            if(err) return res.status(500).json({message:err})
            req.conn.end()

            res.json({message:"Insertion done"})
        })
    }catch (error) {
        return res.status(500).json({message:error.message})
    }
})

module.exports = route