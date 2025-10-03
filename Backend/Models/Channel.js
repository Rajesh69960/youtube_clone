import mongoose from "mongoose"

const ChannelSchema = new mongoose.Schema({
  channelName: {
    type: String,
    required: true,
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, maxlength: 500, default: "" },
  banner: { type: String },
  createdAt: { type: Date, default: Date.now },
})
const Channel = mongoose.model("Channel", ChannelSchema)
export default Channel
