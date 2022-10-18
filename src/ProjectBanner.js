import { Link } from "react-router-dom";

import "./stylesheets/ProjectBanner.css";


function ProjectBanner({ title, siteLink, gitHubLink, description, backgroundLink, imagePosition}) {
    return(<div className={`project-banner image-${imagePosition}`}>
        <div className="project-image-container box-shadow" style={{ backgroundImage: `url(${backgroundLink})` }}>
        </div>
        <div className="project-text-container">
            <div className="title-text">{title} </div>
            <div className="description-text">{description}</div>
            <Link to={`${siteLink}`}><div className="link-to-more">See more</div></Link>
        </div>        
    </div>)
}

export default ProjectBanner;