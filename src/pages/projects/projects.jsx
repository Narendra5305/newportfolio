import React from "react";
import projectsData from "./db.json"
import '../projects/projects.css';



const Projects = () =>{
    return(
        <div id="projects">
            <div className="projects-cont">
                <div className="projects-cont-1">
                    <h1>Projects</h1>
                </div>

                <div className="projects-cont-2">
                    {projectsData.map((data)=>(
                        <div key={data.id} className="project-card">
                            <img src={data.image} alt={data.title}  className="skill-logo"/>
                            <p className="p1">{data.title}</p>
                            <p className="p2">{data.use}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Projects ;