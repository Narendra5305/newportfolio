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


                <div className="projects-cont-2 project-2">
                    
                    <div className="project-card-cont">
                        <div className="project-card-part-1">
                            <img src="https://fs.npstatic.com/userfiles/7687254/image/Weather-app.jpg" alt='onemgimage' className="project-image"/>
                        </div>

                        <div className="project-card-part-2">
                            
                            <div className="project-card-part-2-1">

                                <div className="project-card-part-2-1-title">
                                    <h1>City Weather Finder</h1>
                                </div>

                                <div className="project-card-part-2-1-stack">
                                    <ul>
                                        <li>Python</li>
                                        <li style={{"width":"250px"}}>OpenWeatherMap API</li>
                                    </ul>
                                </div>

                                <div className="project-card-part-2-1-paragraph">
                                    <p>City Weather Finder is a Python-based application that provides real-time weather updates for cities worldwide.
                                         By utilizing the OpenWeatherMap API, users can input their city name and receive the current temperature in Celsius.
                                          The program handles errors gracefully, ensuring a smooth user experience even with invalid input. This project 
                                          demonstrates effective use of third-party APIs, exception handling, and basic Python concepts.
                                    </p> 
                                    
                                </div>

                                <div className="project-links">
                                    <a href="https://github.com/Narendra5305/python_project-2/blob/main/weather.py" target="blank" className="project-link">
                                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="github logo" className="project-link-1-logo" />
                                        <div className="project-links-text">
                                            <a href="https://github.com/Narendra5305/python_project-2/blob/main/weather.py" target="blank">Source Code</a>
                                            <img src="https://www.svgrepo.com/show/532869/link-alt-1.svg" alt="linkpng" className="project-links-text-png"/>
                                        </div>
                                    </a>

                                    <a style={{"display":"none"}} target="blank" href="https://one-mg-clone.netlify.app/" className="project-link">
                                        <img src="https://www.svgrepo.com/show/308934/website-webpage-url-domain.svg" alt="github logo" className="project-link-1-logo" />
                                        <div  target="blank" href="https://one-mg-clone.netlify.app/" className="project-links-text">
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
                            <img src="https://cdn6.aptoide.com/imgs/0/7/9/0798fb40240bcddb1fc8fcff129518e0_fgraphic.png" alt='onemgimage' className="project-image"/>
                        </div>

                        <div className="project-card-part-2">
                            
                            <div className="project-card-part-2-1">

                                <div className="project-card-part-2-1-title">
                                    <h1>Social Media Content Downloader</h1>
                                </div>

                                <div className="project-card-part-2-1-stack">
                                    <ul>
                                        <li>Python</li>
                                        <li style={{"width":"320px"}}>instaloader, pytube</li>
                                    </ul>
                                </div>

                                <div className="project-card-part-2-1-paragraph">
                                    <p>The Social Media Content Downloader is a Python-based utility that allows users to effortlessly download content
                                         from Instagram and YouTube. For Instagram, it retrieves the user's profile picture and the latest post using the instaloader 
                                         library. For YouTube, the program downloads videos using the pytube library. The application provides an intuitive option to 
                                         choose between Instagram and YouTube operations, showcasing its versatility in handling multimedia from popular platforms. 
                                         This project highlights skills in library integration, API usage, and user interaction through Python.
                                    </p> 
                                    
                                </div>

                                <div className="project-links">
                                    <a href="https://github.com/Narendra5305/python_project/blob/main/project3.py" target="blank" className="project-link">
                                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="github logo" className="project-link-1-logo" />
                                        <div className="project-links-text">
                                            <a href="https://github.com/Narendra5305/python_project/blob/main/project3.py" target="blank">Source Code</a>
                                            <img src="https://www.svgrepo.com/show/532869/link-alt-1.svg" alt="linkpng" className="project-links-text-png"/>
                                        </div>
                                    </a>

                                    <a style={{"display":"none"}} target="blank" href="https://one-mg-clone.netlify.app/" className="project-link">
                                        <img src="https://www.svgrepo.com/show/308934/website-webpage-url-domain.svg" alt="github logo" className="project-link-1-logo" />
                                        <div  target="blank" href="https://one-mg-clone.netlify.app/" className="project-links-text">
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