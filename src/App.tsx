import { RouterProvider } from "react-router-dom"
import { MainRouter } from "./router/MainRouter"

function App() {
  return (
    <RouterProvider router={MainRouter}/>
  )
}

export default App
