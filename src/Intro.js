/* eslint-disable react/no-unescaped-entities */

import avatar from "../static/img/lisa-avatar.png";
import "./stylesheets/Intro.css";


function Intro() {
    return(<div id="full-intro-section" className="padded">
        <div id="intro-banner">
            <div id="intro-left" className="media-col-100">
                <h1>I am</h1> 
                <h1><span className="highlight-container"><span className="highlight">Lisa Martelly</span></span></h1>
                <p>I'm a software engineer, former Epidemiologist, enthusiastic cat-mom, and proud Minnesotan.</p>
            </div>
            <div id="intro-right" className="media-col-100-small">
                <img id="avatar" className="box-shadow" src={avatar} alt="Avatar of Lisa Martelly" />
            </div>
        </div>
        <div id="detailed-intro" className="media-col-100">
            <p>I've taken a circuitious path to get here, but my heart has always been in math and technology.
                Software engineering is the most fun I've ever had while working. It is engaging, forces you to learn, and can often be thrilling.
                I graduated from a coding bootcamp in 2022 and am currently looking for the right junior role to kick off my career. 
                I've had lots of fun working on projects and self-teaching since graduating. <b> Keep scrolling to learn more about me and some things I've been working on!</b>
            </p>
        </div>
        <div id="skills-box" className="box-shadow-subtle">
            <div id="skills-title"><h3>Skills</h3></div>
            <div id="skills-sub-box">
                <ul className="skills-list">
                    <li>Python</li>
                    <li>SQL</li>
                    <li>React</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>JavaScript</li>
                </ul>
                <ul className="skills-list">
                    <li>Flask</li>
                    <li>Node</li>
                    <li>Rest API</li>
                    <li>GraphQL</li>
                    <li>Analysis</li>
                    <li>Research</li>
                </ul>
            </div>
        </div>


    </div>)
}

export default Intro;