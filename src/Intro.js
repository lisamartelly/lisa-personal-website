/* eslint-disable react/no-unescaped-entities */

import avatar from "../static/img/lisa-avatar.png";
import "./stylesheets/Intro.css";




function Intro() {
    return(
    <div  className="container">
        <div id="intro-banner" className="padded header">
            <div id="intro-left" className="media-col-100">
                <h1>I am</h1> 
                <h1>Lisa Martelly</h1>
            </div>
            
        </div>
        <div id="full-intro-section">
            <div id="detailed-intro" className="intro-body padded">
                <div>
                <h3>I'm a software engineer, former Epidemiologist, and proud Minnesotan.</h3>

                <p>I've taken a circuitous path to get here, but my heart has always been in math and technology.
                Software engineering is the most fun I've ever had while working. It is engaging, forces you to learn, and can often be thrilling.
                I graduated from a coding bootcamp in 2022 and am currently looking for the right junior role to kick off my career. 
                I've had lots of fun working on projects and self-teaching since graduating. <b> Keep scrolling to learn more about me and some things I've been working on!</b>
                </p>
                </div>
                
            </div>
        </div>
        
        <div className="photo">
            <div id="intro-right" className="">
                    <img id="avatar" className="" src={avatar} alt="Avatar of Lisa Martelly" />
                </div>
            </div>
        <div className="skills padded">
            <div id="skills-box" >
                <div><h3>SKILLS</h3></div>
                <div id="skills-sub-box">
                    <ul className="skills-list">
                        <li>Python</li>
                        <li>SQL</li>
                        <li>React</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>JavaScript</li>
                        <li>Flask</li>
                        <li>Node</li>
                        <li>Rest API</li>
                        <li>GraphQL</li>
                        <li>Analysis</li>
                        <li>Research</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>)
}

export default Intro;