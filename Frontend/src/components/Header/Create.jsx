import React from "react"
import { AiOutlinePlus } from "react-icons/ai"

function Create() {
  return (
    <div className=" bg-gray-200 px-3 py-2 rounded-full hover:bg-gray-300 flex items-center justify-center gap-1 cursor-pointer">
      <AiOutlinePlus />
      <span>Create</span>
    </div>
  )
}

export default Create
