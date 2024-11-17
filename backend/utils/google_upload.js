const fs = require("fs")
const path = require("path")
const {google} = require("googleapis")
const {Readable} = require("stream")

const SERVICE_ACCOUNT_FILE = 'service-account.json'

const auth = new google.auth.GoogleAuth({
    keyFile:SERVICE_ACCOUNT_FILE,
    scopes:['https://www.googleapis.com/auth/drive.file']
})

const drive = google.drive({version:'v3',auth})

const uploadFile = async function uploadFile(req,res,next){
 
    try{
    
    if(!req.file) {
        req.body.image_url = ""
        return next()
    }
    else {
    const fileStream = new Readable()
    fileStream.push(req.file.buffer)
    fileStream.push(null)

    const folder = "1k8bCpxUArCHBXVSzix8dvljuEw5wb1mB"
    const name = `${Date.now()}_${req.body.u_mail}_${req.file.originalname}`;
    const fileMetadata = {
        name: name
    }

    const media = {
        mimeType: req.file.mimetype,
        body: fileStream
    }

    const file = await drive.files.create({
        resource:fileMetadata,
        media:media,
        fields: 'id, webViewLink, webContentLink',
    })

    await drive.permissions.create({
        fileId: file.data.id,
        requestBody: {
            role: 'reader',
            type:'anyone',
            withLink:true
        }
    })
    console.log(req.headers)
    if(req.headers["x-image"]) req.body.image_url = file.data.webViewLink
    else 
    req.body.image_url = `https://drive.google.com/thumbnail?export=view&id=${file.data.id}`
    next()
}

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error})
    }
}

module.exports = uploadFile