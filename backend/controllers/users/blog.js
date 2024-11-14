const express = require("express")
const {connectDB,connectdb} = require("../../database/connection")
const route = express.Router()
const upload = require("../../utils/multer_setup")

route.get('/',connectDB,(req,res)=> {

    try{
        let getQuery = `SELECT b.*,c.comment as comment, c.date as comment_date ,u.u_name as comment_user FROM ${req.db}.blog b
    JOIN ${req.db}.user ON blog.u_mail = user.mail
    LEFT JOIN ${req.db}.comment c ON c.blog_id = b.blog_id
    JOIN ${req.db}.user u ON u.mail = c.u_mail`

    req.conn.query(getQuery,(err,result)=> {

        console.log(result)
        if(! result) return res.json({message:"No results found"})
        req.conn.end()
        const blogs = {}
        result.forEach(row => {

            if(!blogs[row.blog_id]) {
                blogs[row.blog_id] = {
                    blog_id: row.blog_id,
                    title: row.title,
                    content: row.description,
                    user: row.u_mail,
                    image_url : row.image_url,
                    likes: row.likes,
                    date: row.date,
                    comments: []
                }
            }
            if(row.comment){
                blogs[row.blog_id].comments.push({
                    comment: row.comment,
                    comment_date: row.comment_date,
                    comment_user : row.comment_user
                })
            }
            
        });
        const blogArray = Object.values(blogs)
        return res.json(blogArray)
    })}
    catch (error) {
        return res.status(500).json({message:error})
    }

})

route.get('/comment/:blog_id',connectDB,(req,res)=> {

    try {
        let getQuery = `SELECT b.*,c.comment as comment, c.date as comment_date ,u.u_name as comment_user FROM ${req.db}.blog b
    JOIN ${req.db}.user ON blog.u_mail = user.mail
    LEFT JOIN ${req.db}.comment c ON c.blog_id = b.blog_id
    JOIN ${req.db}.user u ON u.mail = c.u_mail
    WHERE b.blog_id = '${req.params.blog_id}'
    ORDER BY comment_date`

    req.conn.query(getQuery,(err,result)=> {
        
        req.conn.end()
        const blogs = {}
        result.forEach(row => {

            if(!blogs[row.blog_id]) {
                blogs[row.blog_id] = {
                    blog_id: row.blog_id,
                    title: row.title,
                    content: row.description,
                    user: row.u_mail,
                    image_url : row.image_url,
                    likes: row.likes,
                    date: row.date,
                    comments: []
                }
            }
            if(row.comment){
                blogs[row.blog_id].comments.push({
                    comment: row.comment,
                    comment_date: row.comment_date,
                    comment_user : row.comment_user
                })
            }
            
        });
        const blogArray = Object.values(blogs)
        return res.json(blogArray)
    })}
    catch (error){
        res.status(500).json({message:error})
    }

})

route.put('/:blog_id',connectDB,(req,res) => {

   try{ 
    let updateQuery = `UPDATE TABLE ${req.db}.blog SET likes = likes+1 WHERE blog_id = ${req.params.blog_id}`

    req.conn.query(updateQuery,(err,result)=> {
    
        req.conn.end()
        res.sendStatus(200)
    })}
    catch (error){
        res.status(500).json({message:error})
    }
})

route.post('/',upload.single('image'),(req,res)=> {
    try {
        console.log(req)
        res.status(200).json({
            file:req.file
        })
    }
    catch (error) {
        res.status(500).json({message:error.message});
    }
})

route.post('/comment/:blog_id',connectDB,(req,res)=> {

    try {
        let insertQuery = `INSERT INTO ${req.db}.comment (u_mail,comment,blog_id,date) 
    VALUES ('${req.body.u_mail}','${req.body.comment}','${req.params.blog_id}','${req.params.date}')`

    req.conn.query(insertQuery,(err,result)=> {
        
        req.conn.end()
        res.sendStatus(201)
    })}
    catch (error) {
        res.status(500).json({message:error})
    }

})


module.exports = route