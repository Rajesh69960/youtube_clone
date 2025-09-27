import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "./components/Register/Register.jsx"
import Login from "./components/Login/Login.jsx"
import VideoPage from "./components/VideoPage/VideoPage.jsx"
import VideoPlayPage from "./pages/VideoPlayPage.jsx"
import HomePage from "./pages/HomePage.jsx"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/video",
        element: <VideoPlayPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
)
