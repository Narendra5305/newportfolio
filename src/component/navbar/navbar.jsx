import React from "react";
import "../navbar/navbar.css"

const Navbar = () =>{
    return(
        <nav id="navbar-main">
            <div className="navbar">
                <div className="navbar-1">
                    <a href="#home">Narendra Singh</a>
                </div>
                
                <div className="navbar-2">
                    <ul className="nav-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                        <li><a href="https://drive.google.com/file/d/1ogPU4vizaJ_OpoQ5pjj67wUXjgjNJ5ND/view?usp=sharing" target="blank">Resume</a></li>
                    </ul> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;