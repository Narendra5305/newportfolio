import React from "react";
import '../about/about.css'
import aboutimage from "../../assets/aboutimage.png"


const About = () =>{
    return(
        <div id="about">
            <div className="about-cont">
                <div className="about-cont-1">
                    <div className="about-cont-1-text">
                        <h2>About <span> Me</span></h2>
                        <h4>Frontend Developer</h4>
                        <p>Accomplished React Frontend Developer proficient in HTML,
                            CSS, and JavaScript, with a strong grasp of responsive
                            designs and cross-browser compatibility. Demonstrates
                            expertise in integrating frontend components with APIs and
                            external services. Leverages Generative AI and rapidly
                            adapts to new tech stacks for effective solutions.
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