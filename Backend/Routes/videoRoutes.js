import express from "express"
import upload from "../Middlewares/upload.js" // your multer middleware
import {
  uploadVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
  getTrendingVideos,
  getVideosByChannel,
} from "../Controllers/videoContoller.js"
import uploadThumbnail from "../Middlewares/uploadThumbnail.js"

const router = express.Router()

router.post("/upload", uploadThumbnail.single("video"), uploadVideo)
router.get("/", getAllVideos)
router.get("/:id", getVideoById)
router.get("/trending", getTrendingVideos)
router.get("/channel/:channelId", getVideosByChannel)
router.put("/:id", uploadThumbnail.single("video"), updateVideo)
router.delete("/:id", deleteVideo)

export default router
