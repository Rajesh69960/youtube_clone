import React from "react"
import VideoTitle from "./VideoTitle"
import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import VideoDescription from "./VideoDescription"
import Comments from "./Comments"
import VideoLists from "./VideoLists"
import VideoSearchTabs from "./VideoSearchTabs"

function VideoPage() {
  return (
    <div className="flex mt-20 px-30 space-x-6 w-full ">
      <div className=" w-[67%] max-w-[850px]">
        <VideoTitle />
        <VideoDescription />
        <Comments />
      </div>
      <div className="w-[33%] ">
        <VideoSearchTabs />
        <VideoLists />
      </div>
    </div>
  )
}

export default VideoPage
