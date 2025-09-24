import React, { useState } from "react"
import youtubeLogo from "../../../public/youtube.png"
import { RxHamburgerMenu } from "react-icons/rx"

function Logo() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex items-center space-x-6 ">
      <section
        className="text-[22px]"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <RxHamburgerMenu />
      </section>
      <section className="flex space-x-1 items-center ">
        <img className="h-7" src={youtubeLogo} alt="Youtube Logo" />
        <span className="font-bold text-lg font-['Oswald', 'sans-serif'] ">
          YouTube
          <sup className="text-xs ml-1 text-gray-600 font-light">IN</sup>
        </span>
      </section>
    </div>
  )
}

export default Logo
