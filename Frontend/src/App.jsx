import React from "react"
import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar"
import Videos from "./components/VideoSection.jsx/Videos"
import Searchtabs from "./components/SearchTabs/Searchtabs"
import SearchTabs from "./components/SearchTabs/Searchtabs"
import ContextProvider from "./utils/Context"

function App() {
  return (
    <ContextProvider>
      <div>
        <Header />
        <section className="flex">
          <SideBar />
          <div className="flex flex-col">
            <SearchTabs />
            <Videos />
          </div>
        </section>
      </div>
    </ContextProvider>
  )
}

export default App
