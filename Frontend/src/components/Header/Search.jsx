import React from "react"
import { CiSearch } from "react-icons/ci"
import { useState } from "react"

function Search() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the search action here
    alert(`Searching for: ${searchTerm}`)
  }
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className=" flex items-center justify-between grow-1 max-w-xl  border-1 border-gray-300 rounded-full "
    >
      <input
        type="text"
        className=" outline-none border-none pl-4 placeholder:text-gray-600 "
        placeholder="Search"
        onChange={handleChange}
      />
      <button
        type="submit"
        className=" text-gray-600 rounded-r-full bg-gray-100 px-4 py-2"
      >
        <CiSearch className="text-2xl " />
      </button>
    </form>
  )
}

export default Search
