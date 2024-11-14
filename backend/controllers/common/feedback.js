const express = require("express")
const mailer = require("../../utils/mail")
const route = express.Router()

route.post('/',(req,res)=> {

    console.log(req)

    mailSent = mailer(req.body.from_mail,req.body.to_mail,`Feedback`,req.body.feedback);
    if(mailSent != true) {

        return res.status(500).json({"message":mailSent})
    }
    console.log("Yes")
    res.status(200).json({message:"Mail Sent"})
})

module.exports = route