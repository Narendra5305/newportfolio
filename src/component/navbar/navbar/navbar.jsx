import React,{useState} from "react";
import "../navbar/navbar.css"

const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return(
        <nav id="navbar-main">
            <div className="navbar">
                <div className="navbar-1">
                    <a href="#home">Narendra Singh</a>
                </div>
                
                <div className={`navbar-2 ${isOpen ? "open" : ""}`}>
                    <ul className="nav-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="https://drive.google.com/file/d/1ogPU4vizaJ_OpoQ5pjj67wUXjgjNJ5ND/view?usp=sharing" target="blank">Resume</a></li>
                    </ul> 
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;