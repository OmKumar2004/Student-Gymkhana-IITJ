const fs = require("fs")

const log = function async (req,res,next) {
    const data = `${Date.now()} ${req.method} ${req.originalUrl}\n`
    try {
        fs.appendFileSync('logs/transactions.txt',data)
        next()
    }
    catch (error) {
        return res.status(500).json({message:error})
    }
}

module.exports = log