import express from "express"
import {
  createChannel,
  getChannelByUser,
  getChannelById,
} from "../controllers/channelController"

import { authMiddleware } from "../Middlewares/authMiddleware.js"
import uploadBanner from "../Middlewares/uploadBanner.js"

const router = express.Router()

// Create a channel
router.post(
  "/create",
  authMiddleware,
  uploadBanner.single("channelBanner"),
  createChannel
)

// Get channel by user ID
router.get("/user/:userId", getChannelByUser)

// Get channel by channel ID
router.get("/:id", getChannelById)

export default router
