import React from "react"

function SearchTabs() {
  const tabs = ["All", "Videos", "Channels", "Playlists", "Movies", "Shows"]
  const activeTab = "All"
  return (
    <div className="w-full flex  space-x-4 py-3 bg-white z-10 text-sm overflow-x-auto fixed top-[57px] px-8 ">
      {tabs.map((tab, index) => {
        return (
          <div
            key={tab}
            className="first:bg-black first:text-white px-3 py-[6px] rounded-lg bg-gray-100 hover:bg-black hover:text-white"
          >
            <button className=" font-semibold  ">{tab}</button>
          </div>
        )
      })}
    </div>
  )
}

export default SearchTabs
