var mailer = require("nodemailer")


function mail (fromMail,toMail,subject,text) { 
    var transporter = mailer.createTransport({
        service:"gmail",
        auth : {
            user:"sumeetpatil20004@gmail.com",
            pass:"Paneer@1109"
        }
    });
    
    var mailOptions = {
        from: fromMail,
        to: toMail,
        subject: subject,
        text:text
    };

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            return error;
        }
        else {
            return true
        }
    })
}

module.exports = mail

