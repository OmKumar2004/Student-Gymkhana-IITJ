const multer = require("multer")
const path = require("path")

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {fileSize : 4*1024*1024},
    fileFilter: (req,file,cb)=> {
        cb(null,true)    
    }
})

module.exports = upload