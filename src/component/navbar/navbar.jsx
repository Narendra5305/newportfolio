import React,{useState} from "react";
import "../navbar/navbar.css"

const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);


    const handleDownload = () => {
        const fileId = "1VfVv97eHAUKAqTxY62xhuLg2XyK1yRmq";
        const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
        
        window.open(viewUrl, '_blank');
    
        
    
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = ''; // Let browser infer filename
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    
      


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
                        <li><a onClick={handleDownload} style={{"cursor": "pointer"}} >Resume</a></li>
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