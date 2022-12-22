import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../styles/style.css"

export default function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className='navbar'>
        <div className='logo' id={openLinks ? "open" : "close"}>
            <Link to="/">Compatibilator</Link>
            <div className='hiddenLinks'>
                <Link to="/">Compatibilator</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>

        <div className='menu'>
            <Link to="/">Compatibilator</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
            <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </div>
  )
}
