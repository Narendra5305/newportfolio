import React from "react";
import './about.css'
import aboutimage from "../../assets/aboutimage.png"


const About = () =>{
    return(
        <div id="about">
            <div className="about-cont">
                <div className="about-cont-1">
                    <div className="about-cont-1-text">
                        <h2>About <span> Me</span></h2>
                        <h4>Full Stack Developer</h4>
                        <p>Dynamic professional equipped with collaborative and problem-solving skills, focusing on professionalism and 
                            adaptability in diverse work environments. Proficient in HTML, CSS, React.js, Express.js and MongoDB with the 
                            capability to leverage Generative AI and rapidly master new technologies. Committed to fostering a productive team 
                            culture and achieving excellence through attention to detail and quality.
                        </p>
                        <button>Resume</button>
                    </div>
                    
                </div>
                <div className="about-cont-2">
                    <div className="about-cont-2-image">
                        <img src={aboutimage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About ;