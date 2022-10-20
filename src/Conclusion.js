import "./stylesheets/Conclusion.css"
import portrait from "../static/img/portrait2-2.jpg"

/* eslint-disable react/no-unescaped-entities */



function Conclusion() {

    return(
    
    <div id="full-conclusion-section" className="padded">
        <div id="conclusion-banner">
            <div id="conclusion-left-text" className="media-col-100">
                <p>As you can see, I'm pretty cool and awesome and think a lot of thinkgs and do a lot of thingks and i think you'd want to have me on your team.
                I can type super fast too.</p>
            </div>
            <div id="conclusion-right-picture" className="media-col-100-small">
                <img id="portrait" className="box-shadow" src={portrait} alt="Lisa Martelly" />
            </div>
        </div>
        

        <div id="connection-row">
            <h2 id="connect-title"> Let's <span className="highlight-container"><span className="highlight">connect:</span></span></h2>
                <div id="social-icons" className="media-col-100-small">
                    <a href="mailto:martelly.lisa@gmail.com" ><i className="bi bi-envelope-fill"></i></a>
                    <a href="https://www.linkedin.com/in/lisa-martelly/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/lisamartelly" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                </div>   
        </div>
    </div>)
}

export default Conclusion;