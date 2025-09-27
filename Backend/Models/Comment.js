import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
  commentId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  videoId: { type: String, required: true },
  text: String,
  timestamp: { type: Date, default: Date.now },
})

const Comment = mongoose.model("Comment", CommentSchema)
export default Comment
