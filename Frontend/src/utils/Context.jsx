import { createContext, useState } from "react"

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <Context.Provider value={[openSideBar, setOpenSideBar]}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
