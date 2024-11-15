const express = require("express")
const {connectDB,connectdb} = require("../../database/connection")
const route = express.Router()
const upload = require('../../utils/multer_setup')
const uploadFile = require('../../utils/google_upload')

route.get('/',connectDB,(req,res)=> {

    try{
        let getQuery = `SELECT b.*,c.comment as comment, c.date as comment_date ,u1.u_name as comment_user FROM ${req.db}.blog b
    JOIN ${req.db}.user u1 ON b.u_mail = u1.mail
    LEFT JOIN ${req.db}.comment c ON c.blog_id = b.blog_id
    JOIN ${req.db}.user u2 ON u2.mail = c.u_mail`

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

        if(!err){
        req.conn.end()
        return res.status(200).json({ message: 'User signed up successfully!' });
        }
    })}
    catch (error){
       return res.status(500).json({message:error})
    }
})

route.post('/',
    upload.single('image'),
    uploadFile,
    connectDB,
    async (req,res)=> {
    try {
        const today = new Date(Date.now());
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months are zero-based
        let dd = today.getDate();
    
        // Add leading zeros to month and day if needed
        mm = mm < 10 ? '0' + mm : mm;
        dd = dd < 10 ? '0' + dd : dd;
        req.body.likes = 0
        let insertQuery = `INSERT INTO ${req.db}.blog (u_mail,image_url,title,description,likes,date) VALUES ('${req.body.u_mail}','${req.body.image_url}','${req.body.title}','${req.body.description}','${req.body.likes}','${yyyy}-${mm}-${dd}')`
        
        req.conn.query(insertQuery,(err,result)=> {

            if(err) return res.status(500).json({message:err})

            if(!err){
            req.conn.end()
            res.json({message:"Blog uploaded successfully"})
            }
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