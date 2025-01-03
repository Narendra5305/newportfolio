import React from "react";
import projectsData from "./db.json"
import '../projects/projects.css';

import onemgimage from "../../assets/onemgimage.png"


const Projects = () =>{
    return(
        <div id="projects">
            <div className="projects-cont">
                <div className="projects-cont-1">
                    <h1>Projects</h1>
                </div>

                <div className="projects-cont-2">
                    
                    <div className="project-card-cont">
                        <div className="project-card-part-1">
                            <img src={onemgimage} alt='onemgimage' className="project-image"/>
                        </div>

                        <div className="project-card-part-2">
                            
                            <div className="project-card-part-2-1">

                                <div className="project-card-part-2-1-title">
                                    <h1>One Mg Clone</h1>
                                </div>

                                <div className="project-card-part-2-1-stack">
                                    <ul>
                                        <li>React.js</li>
                                        <li>JSON</li>
                                    </ul>
                                </div>

                                <div className="project-card-part-2-1-paragraph">
                                    <p>Developed the front end for a One MG clone using React, leveraging hooks like useState and useEffect 
                                        for efficient state management. Utilized Context API to handle global state, ensuring a seamless user experience. 
                                        Implemented React Router to enable smooth navigation and dynamic routing across various features. Focused on creating a 
                                        user-friendly interface with responsive design, showcasing expertise in building modern, interactive, and responsive web
                                        applications with React.
                                    </p> 
                                    
                                </div>

                                <div className="project-links">
                                    <a className="project-link">
                                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="github logo" className="project-link-1-logo" />
                                        <div className="project-links-text">
                                            <a href="">Source Code</a>
                                            <img src="https://www.svgrepo.com/show/532869/link-alt-1.svg" alt="linkpng" className="project-links-text-png"/>
                                        </div>
                                    </a>

                                    <a target="blank" href="https://one-mg-clone.netlify.app/" className="project-link">
                                        <img src="https://www.svgrepo.com/show/308934/website-webpage-url-domain.svg" alt="github logo" className="project-link-1-logo" />
                                        <div  target="blank" href="https://one-mg-clone.netlify.app/" className="project-links-text">
                                            <a>Live Project</a>
                                            <img src="https://www.svgrepo.com/show/486763/open-external.svg" alt="linkpng" className="project-links-text-png"/>
                                        </div>
                                    </a>


                                </div>

                            </div>

                            
                        </div>
                    </div>

                    
                
                </div>
            </div>
        </div>
    )
}


export default Projects ;