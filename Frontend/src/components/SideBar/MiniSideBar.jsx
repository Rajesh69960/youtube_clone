import React, { useContext } from "react"
import { TiHome } from "react-icons/ti"
import { SiYoutubeshorts } from "react-icons/si"
import { MdOutlineSubscriptions } from "react-icons/md"
import { FaRegUserCircle } from "react-icons/fa"
import { LiaDownloadSolid } from "react-icons/lia"
import { Context } from "../../utils/Context"

function MiniSideBar() {
  const [sidebarOpen, setSidebarOpen] = useContext(Context)
  return (
    <div
      className={`w-[60px] fixed top-0 left-0 mt-[57px] py-1 mx-1 bg-white flex flex-col`}
    >
      <div className="flex flex-col items-center gap-1 px-1 py-3 hover:bg-gray-200 rounded-lg">
        <i>
          <TiHome className="text-[24px]" />
        </i>
        <span className="text-[10px]">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1 px-1 py-3  hover:bg-gray-200 rounded-lg">
        <i>
          <SiYoutubeshorts className="text-[24px]" />
        </i>
        <span className="text-[10px]">Shorts</span>
      </div>
      <div className="flex flex-col items-center gap-1 px-1 py-3   hover:bg-gray-200 rounded-lg">
        <i>
          <MdOutlineSubscriptions className="text-[24px]" />
        </i>
        <span className="text-[10px]">Subscription</span>
      </div>
      <div className="flex flex-col items-center gap-1 px-1 py-3  hover:bg-gray-200 rounded-lg">
        <i>
          <FaRegUserCircle className="text-[24px]" />
        </i>
        <span className="text-[10px]">You</span>
      </div>
      <div className="flex flex-col items-center gap-1 px-1 py-3  hover:bg-gray-200 rounded-lg">
        <i>
          <LiaDownloadSolid className="text-[24px]" />
        </i>
        <span className="text-[10px]">Downloads</span>
      </div>
    </div>
  )
}

export default MiniSideBar
