import mongoose from "mongoose"

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 120 },
  description: { type: String, required: true, maxlength: 4000 },
  video: { type: String, required: true },
  thumbnail: { type: String, required: true },
  category: [{ type: String, index: true }],
  channelName: { type: String, required: true },
  channelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channel",
    required: true,
    index: true,
  },
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  handle: { type: String },
  avatar: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
})
VideoSchema.index({ title: "text", description: "text" })
const Video = mongoose.model("Video", VideoSchema)
export default Video
