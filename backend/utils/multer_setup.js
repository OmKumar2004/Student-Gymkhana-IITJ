const multer = require("multer")
const path = require("path")

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {fileSize : 4*1024*1024},
    fileFilter: (req,file,cb)=> {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if(mimetype && extName){
            cb(null,true);
        }
        else {
            cb(new Error("Only images are allowed"));
        }
    }
})

module.exports = upload