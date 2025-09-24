import React from "react"
import Logo from "./Logo"

function Header() {
  return (
    <div className="flex justify-between items-center p-5 shadow-md">
      <Logo />
    </div>
  )
}

export default Header
