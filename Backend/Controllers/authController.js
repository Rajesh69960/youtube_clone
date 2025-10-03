import User from "../Models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET = "your_jwt_secret"

const generateToken = (user) =>
  jwt.sign(
    { id: user._id, email: user.email, username: user.username },
    JWT_SECRET,
    { expiresIn: "7d" }
  )

// Register
export const register = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] })
    if (existingUser)
      return res.status(400).json({ message: "User exists", success: false })
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save()
    res
      .status(201)
      .json({
        data: newUser,
        message: "User registered successfully",
        success: true,
      })
  } catch (err) {
    res.status(500).json({ message: "Server error", success: false })
  }
}

// Login
export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user)
      return res.status(400).json({ message: "Invalid email", success: false })
    const match = await bcrypt.compare(password, user.password)
    if (!match)
      return res
        .status(400)
        .json({ message: "Invalid password", success: false })
    const token = generateToken(user)
    res
      .status(200)
      .json({
        data: user,
        message: "User login successfully",
        token: token,
        success: true,
      })
  } catch (err) {
    res.status(500).json({ message: "Server error", success: false })
  }
}
