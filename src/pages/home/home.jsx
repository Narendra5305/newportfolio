import React from "react";
import '../home/home.css'
import profileimage from "../../assets/profileimage.png"

const Home = () =>{
    return(
        <div id="home">
            <div className="home-cont">
                <div className="home-box-1">
                    <div className="home-text-1">
                        <h2>Nice to meet you! <br /> <span className="home-text-1-span"> I'm Narendra Singh </span> </h2>
                        <p>I'm a front-end developer passionate about building accessible web apps that users love. </p>
                        <a href="mailto:narendrasinghsitu4@gmail.com">Contact Me!</a>
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