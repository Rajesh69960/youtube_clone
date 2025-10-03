import express from "express"
import {
  createComment,
  getCommentsByVideo,
  getCommentById,
  updateComment,
  deleteComment,
} from "../Controllers/commentController.js"

const router = express.Router()

// Create a comment
router.post("/create", createComment)

// Get all comments for a video
router.get("/video/:videoId", getCommentsByVideo)

// Get a comment by ID
router.get("/:id", getCommentById)

// Update a comment
router.put("/:id", updateComment)

// Delete a comment
router.delete("/:id", deleteComment)

export default router
