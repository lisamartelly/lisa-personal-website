
import avatar from "../static/img/lisa-avatar.png";
import "./stylesheets/Intro.css";


function Intro() {
    return(<div>
        <div id="intro-banner">
            <div id="intro-left">
                <h1>I am</h1> 
                <h1><span class="highlight-container"><span class="highlight">Lisa Martelly</span></span></h1>
                <p>I am a software engineer - converted from my past life as an Epidemiologist and 
                    Public Health Professional.</p>
            </div>
            <div id="intro-right">
                <img id="avatar" className="box-shadow" src={avatar} alt="Avatar of Lisa Martelly" />
            </div>
        </div>
        <div id="detailed-intro">
            <div>
                <h3><span className="highlight-light">Tech</span></h3>
                    <ul>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>CSS</li>
                        <li>SQL</li>
                        <li>REST Api</li>
                        <li>GraphQL</li>
                    </ul>
            </div>
            <div>
                <h3><span className="highlight-light">Skills</span></h3>
                    <ul>
                        <li>Research</li>
                        <li>Communication</li>
                        <li>Data Analysis</li>
                        <li>Front-end</li>
                    </ul>
            </div>
            <div>
                <h3><span className="highlight-light">Hobbies</span></h3>
                    <ul>
                        <li>Woodworking</li>
                        <li>Biking</li>
                        <li>Bar Trivia</li>
                        <li>Community Education</li>
                    </ul>
            </div>
            
        </div>
    </div>)
}

export default Intro;