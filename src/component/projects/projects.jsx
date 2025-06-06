import React from "react";
import projectsData from "./db.json"
import './projects.css';

import medicart from "../../assets/medicart.png"
import mediCare from "../../assets/mediCare.png"


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
                            <img src={medicart} alt='onemgimage' className="project-image"/>
                        </div>

                        <div className="project-card-part-2">
                            
                            <div className="project-card-part-2-1">

                                <div className="project-card-part-2-1-title">
                                    <h1>Medicart</h1>
                                </div>

                                <div className="project-card-part-2-1-stack">
                                    <ul>
                                        <li>React.js</li>
                                        <li>JSON</li>
                                    </ul>
                                </div>

                                <div className="project-card-part-2-1-paragraph">
                                    <p>Developed the front end for a MediCart application inspired by OneMG, using React to build a seamless and 
                                        responsive user interface. Leveraged hooks like useState and useEffect for efficient state management, and 
                                        utilized the Context API for handling global state across the app. Implemented React Router to enable dynamic 
                                        routing and smooth page navigation. Emphasized clean UI/UX principles to deliver a modern and intuitive web 
                                        experience, demonstrating expertise in building scalable and interactive frontend applications.
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
                            <img src={mediCare} alt='mediCare image' className="project-image"/>
                        </div>

                        <div className="project-card-part-2">
                            
                            <div className="project-card-part-2-1">

                                <div className="project-card-part-2-1-title">
                                    <h1>MadiCare Store</h1>
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
                                    <p>MadiCare is an e-commerce platform inspired by Dermstore, built using the MERN stack 
                                        (MongoDB, Express.js, React.js, Node.js). It integrates Redux Toolkit for efficient state management 
                                        and React Router DOM for smooth, dynamic navigation. The platform enables users to browse a diverse 
                                        collection of skincare and beauty products, manage accounts, and enjoy a seamless shopping experience. 
                                        Focused on modern UI/UX, MadiCare replicates real-world e-commerce functionality with intuitive design and 
                                        robust backend integration.
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


{/* 
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
                </div> */}


            </div>
        </div>
    )
}


export default Projects ;