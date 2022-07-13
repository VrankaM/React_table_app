import Home from "./pages/Home"
import Data from "./pages/Data"
import Contact from "./pages/Contact"
import SharedLayout from "./components/SharedLayout"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "antd/dist/antd.min.css"

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <SharedLayout />} >
          <Route index element={ <Home />} />
          <Route path="/data" element={ <Data /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
