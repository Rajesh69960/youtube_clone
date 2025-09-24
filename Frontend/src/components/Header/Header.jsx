import React from "react"
import Logo from "./Logo"
import Search from "./Search"
import Create from "./Create"
import SignIn from "./SignIn"

function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-3 ">
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
