import Channel from "../Models/Channel.js"

// Create a new channel
export const createChannel = async (req, res) => {
  try {
    const { channelName, owner, description, banner } = req.body

    const existingChannel = await Channel.findOne({ owner })
    if (existingChannel) {
      return res.status(400).json({ message: "User already has a channel" })
    }

    const newChannel = new Channel({
      channelName,
      owner,
      description,
      banner,
    })

    await newChannel.save()
    res.status(201).json(newChannel)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get channel by user ID
export const getChannelByUser = async (req, res) => {
  try {
    const ownerId = req.params.userId
    const channel = await Channel.findOne({ owner: ownerId })
    if (!channel) {
      return res
        .status(404)
        .json({ message: "Channel not found for this user" })
    }
    res.json(channel)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get channel by channel ID
export const getChannelById = async (req, res) => {
  try {
    const { id } = req.params
    const channel = await Channel.findById(id)
    if (!channel) {
      return res.status(404).json({ message: "Channel not found" })
    }
    res.json(channel)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
