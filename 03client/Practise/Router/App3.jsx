import React from "react"; 
import Navbar from "./Navbar";
import Blog from "./Blog";
import Contact from "./Contact";
import About from "./About"; 
import { Route, Routes ,BrowserRouter } from "react-router-dom";
import Home from "./Home";
const App3 = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/about" element={<About />} />
          <Route path="/home/contact" element={<Contact />} />
          <Route path="/home/blog" element={<Blog />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App3;
