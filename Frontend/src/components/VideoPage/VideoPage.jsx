import React from "react"
import VideoTitle from "./VideoTitle"
import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import VideoDescription from "./VideoDescription"
import Comments from "./Comments"

function VideoPage() {
  return (
    <div className="mt-20 mx-30  w-[850px]">
      <VideoTitle />
      <VideoDescription />
      <Comments />
    </div>
  )
}

export default VideoPage
