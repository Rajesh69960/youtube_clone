import React from "react"
import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar"
import Videos from "./components/VideoSection.jsx/Videos"
import Searchtabs from "./components/SearchTabs/Searchtabs"
import SearchTabs from "./components/SearchTabs/Searchtabs"
import ContextProvider from "./utils/Context"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <ContextProvider>
      <Outlet />
    </ContextProvider>
  )
}

export default App
