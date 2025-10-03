import Video from "../Models/Video.js"

// Upload Video
export const uploadVideo = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      channelName,
      channelId,
      uploader,
      handle,
      avatar,
    } = req.body
    const videoUrl = req.file.path // Cloudinary URL
    const thumbnailUrl = req.body.thumbnail // assuming thumbnail URL is sent from client

    const newVideo = new Video({
      title,
      description,
      video: videoUrl,
      thumbnail: thumbnailUrl,
      category,
      channelName,
      channelId,
      uploader,
      handle,
      avatar,
    })

    await newVideo.save()
    res.status(201).json({
      video: newVideo,
      message: "Video uploaded successfully",
      success: true,
    })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
}

// Get all videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 })
    res.json({ data: videos, success: true })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
}

// Get video by ID
export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
    if (!video)
      return res
        .status(404)
        .json({ message: "Video not found", success: false })
    res.json({ data: video, success: true })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
}

// Update Video
export const updateVideo = async (req, res) => {
  try {
    const { title, description, category, thumbnail } = req.body

    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        category,
        thumbnail,
      },
      { new: true }
    )

    if (!updatedVideo)
      return res
        .status(404)
        .json({ message: "Video not found", success: false })
    res.json({
      data: updatedVideo,
      message: "Video updated successfully",
      success: true,
    })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
}

// Delete Video
export const deleteVideo = async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id)
    if (!deletedVideo)
      return res
        .status(404)
        .json({ message: "Video not found", success: false })
    res.json({ message: "Video deleted successfully", success: true })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
}
// Get videos by channel ID with pagination
export async function getVideosByChannel(req, res) {
  try {
    const { channelId } = req.params
    // Pagination
    const page = parseInt(req.query.page) || 1
    const limit = 10
    const skip = (page - 1) * limit

    const videos = await Video.find({ channelId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("uploader", "name avatar")
    // Total videos
    const total = await Video.countDocuments({ channelId })

    return res.status(200).json({
      page,
      total,
      videos,
    })
  } catch (error) {
    console.error("Error fetching channel videos:", error)
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message })
  }
}
// Get trending videos based on views
export async function getTrendingVideos(req, res) {
  try {
    // Controller for get the videos based on the high number of views calling them trending, Not implemented in the frontend
    const videos = await Video.find()
      .sort({ views: -1 })
      .limit(10)
      .populate("channelId", "channelName channelBanner")
      .populate("uploader", "name avatar")

    return res.status(200).json({ videos })
  } catch (error) {
    console.error("Error fetching trending videos:", error)
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message })
  }
}
