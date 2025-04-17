import React from "react";
import projectsData from "./db.json"
import './projects.css';

import onemgimage from "../../assets/onemgimage.png"


const Projects = () =>{
    return(
        <div id="projects">
            <div className="projects-cont">
                <div className="projects-cont-1">
                    <h1>Projects</h1>
                </div>

                <div className="projects-cont-2 project-1">
                    
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
                                    <a href="https://github.com/Narendra5305/onemgclone" target="blank" className="project-link">
                                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="github logo" className="project-link-1-logo" />
                                        <div className="project-links-text">
                                            <a href="">Source Code</a>
                                            <img src="https://www.svgrepo.com/show/532869/link-alt-1.svg" alt="linkpng" className="project-links-text-png"/>
                                        </div>
                                    </a>

                                    <a target="blank" href="https://one-mg.netlify.app/" className="project-link">
                                        <img src="https://www.svgrepo.com/show/308934/website-webpage-url-domain.svg" alt="deploy logo" className="project-link-1-logo" />
                                        <div  target="blank" href="https://one-mg.netlify.app/" className="project-links-text">
                                            <a>Live Project</a>
                                            <img src="https://www.svgrepo.com/show/486763/open-external.svg" alt="linkpng" className="project-links-text-png"/>
                                        </div>
                                    </a>


                                </div>

                            </div>

                            
                        </div>
                    </div>
                </div>




                <div className="projects-cont-2 project-2">
                    
                    <div className="project-card-cont">
                        <div className="project-card-part-1">
                            <img src="https://images.rodpub.com/images/225/451_350.jpg" alt='dermstore image' className="project-image"/>
                        </div>

                        <div className="project-card-part-2">
                            
                            <div className="project-card-part-2-1">

                                <div className="project-card-part-2-1-title">
                                    <h1>Dermstore Clone</h1>
                                </div>

                                <div className="project-card-part-2-1-stack">
                                    <ul>
                                        <li>React</li>
                                        <li>Express.js</li>
                                        <li>Node.js</li>
                                        <li>MongoDB</li>
                                        <li>RTK</li>
                                    </ul>
                                </div>

                                <div className="project-card-part-2-1-paragraph">
                                    <p>This Dermstore clone website is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) combined with 
                                        Redux Toolkit for state management and React Router DOM for seamless navigation. The platform allows users to browse a 
                                        wide range of skincare and beauty products, manage their accounts, and explore products effortlessly. It features responsive design, 
                                        efficient state handling, and smooth user interactions, replicating a real-world e-commerce experience with modern technologies.
                                    </p> 
                                    
                                </div>

                                <div className="project-links">
                                    <a href="https://github.com/Narendra5305/fullstackrepo" target="blank" className="project-link">
                                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="github logo" className="project-link-1-logo" />
                                        <div className="project-links-text">
                                            <a target="blank">Source Code</a>
                                            <img src="https://www.svgrepo.com/show/532869/link-alt-1.svg" alt="linkpng" className="project-links-text-png"/>
                                        </div>
                                    </a>

                                    <a target="blank" href="https://moonlit-bienenstitch-1ea9a1.netlify.app/" className="project-link">
                                        <img src="https://www.svgrepo.com/show/308934/website-webpage-url-domain.svg" alt="deploy logo" className="project-link-1-logo" />
                                        <div   className="project-links-text">
                                            <a >Live Project</a>
                                            <img src="https://www.svgrepo.com/show/486763/open-external.svg" alt="linkpng" className="project-links-text-png"/>
                                        </div>
                                    </a>


                                </div>

                            </div>

                            
                        </div>
                    </div>
                </div>



                <div className="projects-cont-2 project-3">
                    
                    <div className="project-card-cont">
                        <div className="project-card-part-1">
                            <img src="https://miro.medium.com/v2/resize:fit:12636/1*nPNrEKZnadjaqVCgCm-MGA.png" alt='meetup image' className="project-image"/>
                        </div>

                        <div className="project-card-part-2">
                            
                            <div className="project-card-part-2-1">

                                <div className="project-card-part-2-1-title">
                                    <h1>Meetup Clone</h1>
                                </div>

                                <div className="project-card-part-2-1-stack">
                                    <ul>
                                        <li>React</li>
                                        <li>Express.js</li>
                                        <li>Node.js</li>
                                        <li>MongoDB</li>
                                        
                                    </ul>
                                </div>

                                <div className="project-card-part-2-1-paragraph">
                                    <p>This Meetup clone website is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) 
                                        with Redux Toolkit for state management and React Router DOM for smooth navigation. The platform allows 
                                        users to discover, join, and create events based on their interests. With Google authentication for easy login, 
                                        it offers a responsive design, real-time updates, and seamless user interactions, providing a dynamic and user-friendly 
                                        event management experience with modern technologies.
                                    </p> 
                                    
                                </div>

                                <div className="project-links">
                                    <a href="https://github.com/Narendra5305/fullStack_meetup" target="blank" className="project-link">
                                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="github logo" className="project-link-1-logo" />
                                        <div className="project-links-text">
                                            <a  target="blank">Source Code</a>
                                            <img src="https://www.svgrepo.com/show/532869/link-alt-1.svg" alt="linkpng" className="project-links-text-png"/>
                                        </div>
                                    </a>

                                    <a target="blank" href="https://meetup-clone-1.netlify.app/" className="project-link">
                                        <img src="https://www.svgrepo.com/show/308934/website-webpage-url-domain.svg" alt="deploy logo" className="project-link-1-logo" />
                                        <div  target="blank" href="" className="project-links-text">
                                            <a >Live Project</a>
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