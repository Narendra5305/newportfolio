import React from "react";
import skilldata from "./db.json"
import '../skill/skill.css'



const Skill = () =>{
    return(
        <div id="skills">
            <div className="skill-cont">
                <div className="skill-cont-1">
                    <div className="skill-cont-1-text">
                        <h1>Skills & Tools</h1>
                    </div>
                </div>
                <div className="skill-cont-2">
                    {skilldata.map((data)=>(
                        <div key={data.id} className="skill-card">
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

export default Skill ;