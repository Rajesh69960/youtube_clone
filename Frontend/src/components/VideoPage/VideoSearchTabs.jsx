import React from "react"

function VideoSearchTabs() {
  const tabs = [
    "All",
    "Videos",
    "Channels",
    "Playlists",
    "Movies",
    "Shows",
    "Live",
    "Community",
    "Channels",
    "More",
  ]
  return (
    <div className="w-full flex space-x-4 px-4 py-2 bg-white z-10 overflow-x-scroll">
      {tabs.map((tab) => {
        return (
          <button className=" w-full px-3 py-1 rounded-lg bg-gray-100 font-semibold ">
            {tab}
          </button>
        )
      })}
    </div>
  )
}

export default VideoSearchTabs
