import {HashRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Blog from "./Components/Blog"
import ContactUs from "./Components/ContactUs"
import Navbar from "./Components/Navbar"
import Layout from "./Components/Layout"

function App() {
 
  return (
    <>
    <Router>
    <Navbar/>
    <div className="pt-10">
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contactus" element={<ContactUs/>} />
        </Route>
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
