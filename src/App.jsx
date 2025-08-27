import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Blog from "./Components/Blog"
import ContactUs from "./Components/ContactUs"
import Navbar from "./Components/Navbar"

function App() {
 
  return (
    <>
    <Router>
    <Navbar/>
    <div classname="pt-20">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contactus" element={<ContactUs/>} />

      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
