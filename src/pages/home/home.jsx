import React from "react";
import '../home/home.css'
import profileimage from "../../assets/profileimage.png"
import { AnimationText } from "./animatedtext1";

const Home = () =>{
    return(
        <div id="home">
            <div className="home-cont">
                <div className="home-box-1">
                    <div className="home-text-1">
                        <h2>Nice to meet you! <br /> <span className="home-text-1-span"> I'm Narendra Singh </span> </h2>
                    </div>
                    <div className="home-text-2">
                        <div className="home-text-2-text">
                            <p>I'm a front-end developer passionate about building accessible web apps that users love. </p>
                        </div>
                    </div>
                    <div className="home-text-3">
                        <div className="home-text-3-text">
                        <a href="">Contact Me!</a>
                        </div>
        
                    </div>
                </div>
                <div className="home-box-2">
                    <img className="profile-image" src={profileimage} alt="profile image" />
                </div>
            </div>
        </div>
    )
}


export default Home;