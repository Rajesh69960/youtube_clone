import React, { useContext } from "react"
import SearchTabs from "../components/SearchTabs/Searchtabs"
import Videos from "../components/VideoSection.jsx/Videos"
import SideBar from "../components/SideBar/SideBar"
import MiniSideBar from "../components/SideBar/MiniSideBar"
import { Context } from "../utils/Context"
import Header from "../components/Header/Header"

function HomePage() {
  const [openSideBar, setOpenSideBar] = useContext(Context)
  let ifSidebar = openSideBar ? "pl-60" : "pl-0"
  return (
    <div className="flex">
      <Header />
      <div>{openSideBar ? <SideBar /> : <MiniSideBar />}</div>
      <div className={`flex flex-col ${ifSidebar} `}>
        <SearchTabs />
        <Videos />
      </div>
    </div>
  )
}

export default HomePage
