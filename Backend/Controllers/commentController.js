import Comment from "../Models/Comment.js"

// Create a comment
export const createComment = async (req, res) => {
  try {
    const { videoId, userId, comment } = req.body

    const newComment = new Comment({
      video: videoId,
      user: userId,
      comment,
    })

    await newComment.save()
    res.status(201).json(newComment)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get all comments for a video
export const getCommentsByVideo = async (req, res) => {
  try {
    const { videoId } = req.params

    const comments = await Comment.find({ video: videoId })
      .populate("user", "username profilePic") // assuming user model has username and profilePic
      .sort({ createdAt: -1 })

    res.json(comments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get comment by ID
export const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.findById(id).populate(
      "user",
      "username profilePic"
    )
    if (!comment) return res.status(404).json({ message: "Comment not found" })
    res.json(comment)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Update a comment
export const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    const { comment } = req.body

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { comment },
      { new: true }
    )

    if (!updatedComment)
      return res.status(404).json({ message: "Comment not found" })
    res.json(updatedComment)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Delete a comment
export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deletedComment = await Comment.findByIdAndDelete(id)
    if (!deletedComment)
      return res.status(404).json({ message: "Comment not found" })
    res.json({ message: "Comment deleted" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
