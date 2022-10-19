import "./stylesheets/Conclusion.css"
import portrait from "../static/img/portrait2-2.jpg"

/* eslint-disable react/no-unescaped-entities */



function Conclusion() {

    return(
    
    <div id="full-conclusion-section" className="padded">
        <div id="conclusion-banner">
            <div id="conclusion-left-text">
                <p>As you can see, I'm pretty cool and awesome and think a lot of thinkgs and do a lot of thingks and i think you'd want to have me on your team.
                I can type super fast too.</p>
            </div>
            <div id="conclusion-right-picture">
                <img id="portrait" className="box-shadow" src={portrait} alt="Lisa Martelly" />
            </div>
        </div>
        

        <div id="connection-row">
            <h2> Let's <span className="highlight-container"><span className="highlight">connect:</span></span></h2>
                <div id="social-icons">
                    <i className="bi bi-envelope-fill"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-github"></i>
                </div>   
        </div>
    </div>)
}

export default Conclusion;