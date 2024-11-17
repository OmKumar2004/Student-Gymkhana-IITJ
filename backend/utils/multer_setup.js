const multer = require("multer")
const path = require("path")

const storage = multer.memoryStorage();

const uploader = async function (req,res,next) {

    if(!req.file) return next()
    else {
        if(req.body.image) return upload.single('image')
        else if(req.body.resource) return upload.single('resource')
    }
}


const upload = multer({
    storage: storage,
    limits: {fileSize : 4*1024*1024},
    fileFilter: (req,file,cb)=> {
        cb(null,true)    
    }
})
module.exports = upload