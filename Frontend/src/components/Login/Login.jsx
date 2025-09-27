import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import youtubeLogo from "../../assets/youtube.png"
function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({})

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Validation function
  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password"
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    return newErrors
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      // Here, you can send data to backend
      console.log("Form data submitted:", formData)
      // Reset form or show success message
    }
  }

  function handleRegister() {
    navigate("/login")
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-red-600 to-black">
      <div className="bg-white w-full max-w-md px-8 py-6 rounded-xl space-y-6">
        <div className="flex flex-col items-center justify-center gap-1">
          <img src={youtubeLogo} alt="" className="h-10 w-10" />
          <p className="text-2xl font-bold ">
            Welcome To <span className="text-red-500">YouTube</span>
          </p>
          <p className="text-sm text-gray-500">
            Register to watch, create videos
          </p>
        </div>
        <form
          action=""
          onClick={handleSubmit}
          noValidate
          className=" w-full flex flex-col items-start space-y-3 "
        >
          <div className=" w-full flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="password" className="mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="text-sm text-gray-700">
            Don't Have an Account ?{" "}
            <span
              className=" text-base text-cyan-600"
              onClick={() => navigate("/register")}
            >
              Create One
            </span>{" "}
          </div>
          <div className=" mt-2 w-full bg-red-600 flex items-center justify-center text-white p-2 rounded-xl text-xl hover:bg-red-700 transition">
            <button className="">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
