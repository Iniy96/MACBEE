import multer from "multer";

const configureMulter=()=>{
    
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads') // specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`) // use the original filename for the uploaded file
    }
})

const upload = multer({ storage: storage })

return upload

}

export default configureMulter;