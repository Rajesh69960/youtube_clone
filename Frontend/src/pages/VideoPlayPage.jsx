import React, { useContext } from "react"
import VideoPage from "../components/VideoPage/VideoPage"
import Header from "../components/Header/Header"
import SideBar from "../components/SideBar/SideBar"
import { Context } from "../utils/Context"

function VideoPlayPage() {
  const [openSideBar, setOpenSideBar] = useContext(Context)
  return (
    <div className="flex w-[100%]">
      <Header />
      <div>{openSideBar ? <SideBar /> : null}</div>
      <section className="w-full">
        <VideoPage />
      </section>
    </div>
  )
}

export default VideoPlayPage
