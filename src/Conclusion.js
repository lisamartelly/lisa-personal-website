import "./stylesheets/Conclusion.css"
import portrait from "../static/img/portrait2-2.jpg"

/* eslint-disable react/no-unescaped-entities */



function Conclusion() {

    return(

    
    
    <div id="full-conclusion-section" className="conclusion-container">

        <div className="text-bg"></div>
        <div id="conclusion-left-text" className="text">
                <h3>I am passionate about engineering and have a lot to offer.</h3>
                <p>I'm looking forward to finding the right organization and team to contribute towards and thrive in! 
                Please reach out if you'd like to chat for any reason: <a href="mailto:martelly.lisa@gmail.com">martelly.lisa@gmail.com</a></p>
        </div>
       
        <div id="conclusion-right-picture" className="picture">
            <img id="portrait" className="box-shadow" src={portrait} alt="Lisa Martelly" />
        </div>

        <div id="connection-row" className="icons">
            <a href="mailto:martelly.lisa@gmail.com" ><i className="bi bi-envelope-fill"></i></a>
            <a href="https://www.linkedin.com/in/lisa-martelly/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/lisamartelly" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
        </div>
        <div></div><div></div>
    </div>)
}

export default Conclusion;