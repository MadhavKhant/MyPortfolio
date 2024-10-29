import { Routes, Route } from "react-router-dom"
import {Home, About, Projects, Contact} from './Pages'
// import Navbar from "./Components/Navbar/Navbar"



const App = () => {
  return (
    <div>

      {/* <Navbar/>   */}

      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/About"/>
        <Route element={<Projects/>} path="/Projects"/>
        <Route element={<Contact/>} path="/Contact"/>
      </Routes>

    </div>
  )
}

export default App
