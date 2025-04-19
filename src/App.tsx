import { Routes,Route } from "react-router-dom"
import Register from "./Pages/Register/Register"
import { ToastContainer } from "react-toastify"
import Login from "./Pages/Login/Login"
import Layout from "./Layout/Layout"
import Profile from "./Pages/Profile/Profile"
import Post from "./Components/Post.tsx/Post"

const App = () => {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/post" element={<Post/>}/>
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
      

      <ToastContainer/>
    </>
  )
}

export default App
