import { Link } from "react-router-dom";

import "./stylesheets/ProjectBanner.css";


function ProjectBanner({ title, siteLink, gitHubLink, description, backgroundLink, imagePosition}) {
    return(<div className={`project-banner image-${imagePosition}`}>
        <div className="project-image-container" style={{ backgroundImage: `url(${backgroundLink})` }}>
        </div>
        <div className="project-text-container">
            <div className="title-text">{title} <Link to={`${gitHubLink}`}><i class="bi bi-github"></i></Link> </div>
            <div className="description-text">{description}</div>
            <Link to={`${siteLink}`}><div className="link-to-more">See more</div></Link>
        </div>        
    </div>)
}

export default ProjectBanner;