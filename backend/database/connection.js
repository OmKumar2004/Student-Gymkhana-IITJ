mysql = require("mysql2")

function connectdb () {
    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"alpha"
    });
    
    connection.connect(function(err){
        if(err) {
            return [null,err]
        }
        console.log("Connection established");
    })
    return [connection,"gymkhana"]
}

const connectDB = function (req,res,next){
    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"alpha"
    });
    
    connection.connect(function(err){
        if(err) {

            res.status(500)
            res.json({"message":err})
            res.end()
        }
        console.log("Connection established");
    })

    req.conn = connection
    req.db = "gymkhana"
    next()
}

module.exports = {connectDB,connectdb}

