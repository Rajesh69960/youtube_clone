import mongoose from "mongoose"

const ChannelSchema = new mongoose.Schema({
  channelId: { type: String, required: true, unique: true },
  channelName: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: String,
  channelBanner: String,
  subscribers: { type: Number, default: 0 },
  videos: [{ type: String }], // Array of videoIds
  createdAt: { type: Date, default: Date.now },
})

const Channel = mongoose.model("Channel", ChannelSchema)
export default Channel
