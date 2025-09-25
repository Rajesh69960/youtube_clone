import React from "react"
import { FaRegUserCircle } from "react-icons/fa"
function SignIn() {
  return (
    <div className="border-1 border-cyan-300 text-cyan-300 px-3 py-2 rounded-full hover:text-cyan-500 hover:border-cyan-500 hover:scale-110 flex items-center justify-center gap-1 cursor-pointer">
      <FaRegUserCircle />
      <span>Sign_In</span>
    </div>
  )
}

export default SignIn
