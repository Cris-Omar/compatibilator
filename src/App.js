import {useState, useEffect} from 'react';
import "../src/styles/style.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from "./pages/Blog"
import About from "./pages/About"
import Compatibilator from "./pages/Compatibilator"
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/" element={<Compatibilator/>}/>
          <Route exact path="/Blog" element={<Blog/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
