import React from "react"
import Logo from "./Logo"
import Search from "./Search"
import Create from "./Create"
import SignIn from "./SignIn"

function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-2 bg-white fixed top-0 left-0 right-0 z-10">
      <Logo />
      <Search />
      <div className="flex items-center gap-4">
        <Create />
        <SignIn />
      </div>
    </div>
  )
}

export default Header
