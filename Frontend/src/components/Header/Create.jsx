import React from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

function Create() {
  const navigate = useNavigate()
  return (
    <div
      className=" bg-gray-200 px-3 py-2 rounded-full hover:bg-gray-300 flex items-center justify-center gap-1 hover:scale-110 cursor-pointer"
      onClick={() => navigate("/register")}
    >
      <AiOutlinePlus />
      <span>Create</span>
    </div>
  )
}

export default Create
