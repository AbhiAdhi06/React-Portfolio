import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import NoPage from "./Pages/NoPage";

const Routing = () => {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </Router>
  )
};

export default Routing;
