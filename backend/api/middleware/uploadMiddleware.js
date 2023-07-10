import multer from 'multer';


// Multer Setup
const storage = multer.diskStorage({
  destination: function (req,file, cb){
    cb(null, '../../public/images')
  },
  filename: function(req,file, cb){
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({storage: storage})

export default  upload


