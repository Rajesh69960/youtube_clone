import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./Routes/authRoutes.js"
import channelRoutes from "./Routes/channelRoutes.js"
import videoRoutes from "./Routes/videoRoutes.js"
import commentRoutes from "./Routes/commentRoutes.js"
dotenv.config()

const app = express()

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/channels", channelRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

// middleware for error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: err.message,
  })
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
