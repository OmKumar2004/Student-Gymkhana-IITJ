var mailer = require("nodemailer")


function mail (fromMail,toMail,subject,text) { 
    var transporter = mailer.createTransport({
        service:"gmail",
        auth : {
            user:"studentgymkhanaiitj@gmail.com",
            pass:"studentgymkhana@1511"
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