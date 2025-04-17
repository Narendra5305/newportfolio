import React from "react";
import "./footer.css"

const Footer =()=>{
    return(
        <footer className="footer">
            
            <div className="footer-cont">
                <div className="footer-cont-1">
                    <hr />
                </div>
                <div className="footer-cont-2">
                    <a href="https://www.linkedin.com/in/narendra-5305-/" target="blank"><img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="linkedin-logo" /></a>
                    <a href="https://github.com/Narendra5305" target="blank"><img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="github-logo" /></a>
                    <a href="mailto:narendrasinghsitu4@gmail.com" ><img src="https://www.svgrepo.com/show/381000/new-logo-gmail.svg" alt="gmail-logo" /></a>
                </div>
                <div className="footer-cont-2">
                    <p>© Narendra Singh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;