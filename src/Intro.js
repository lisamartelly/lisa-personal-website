
import avatar from "../static/img/lisa-avatar.png";
import "./stylesheets/Intro.css";


function Intro() {
    return(<div>
        <div id="intro-banner">
            <div id="intro-left">
                <h1>I am</h1> 
                <h1><span className="highlight-container"><span className="highlight">Lisa Martelly</span></span></h1>
                <p>I am a software engineer - converted from my past life as an Epidemiologist and 
                    Public Health Professional.</p>
            </div>
            <div id="intro-right">
                <img id="avatar" className="box-shadow" src={avatar} alt="Avatar of Lisa Martelly" />
            </div>
        </div>
        <div id="detailed-intro">
            <p>This is where I talk more in depth about myself. I want to be a frontend engineer. I think it's really cool and fun. 
            I know how to do a lot of things. Oh, you want to know what I know? Well I will tell you, or maybe add little icons.
            I'm not sure. still deciding what I will do for that. 

            Keep scrolling for some things I've been working on over the past few months!
            </p>
        </div>
        <div id="skills-box">
            <i class="fa-brands fa-square-js"></i>

        </div>


    </div>)
}

export default Intro;