import multer from "multer"
import cloudinary from "../config/cloudinary.js"
import { CloudinaryStorage } from "multer-storage-cloudinary"

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "videos", // folder in Cloudinary
    resource_type: "video", // specify resource type
    allowedFormats: ["mp4", "mov", "avi"], // allowed formats
  },
})

const upload = multer({ storage })
export default upload
