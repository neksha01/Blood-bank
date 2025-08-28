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
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Blog />
                <ContactUs />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
