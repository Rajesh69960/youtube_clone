import mongoose from "mongoose"
const VideoSchema = new mongoose.Schema({
  videoId: { type: String, required: true, unique: true },
  title: String,
  thumbnailUrl: String,
  description: String,
  channelId: { type: String, required: true },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  views: { type: Number, default: 0 },
  likes: Number,
  dislikes: Number,
  uploadDate: Date,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
})
const Video = mongoose.model("Video", VideoSchema)
export default Video
