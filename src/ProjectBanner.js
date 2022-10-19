import { Link } from "react-router-dom";

import "./stylesheets/ProjectBanner.css";

// data-aos={`fade-${imagePosition}`} data-aos-once="true" 



function ProjectBanner({ title, siteLink, description, backgroundLink, imagePosition}) {
    return(<div className={`project-banner image-${imagePosition}`}>
        <div className="project-image-container box-shadow" 
            style={{ backgroundImage: `url(${backgroundLink})` }} 
            data-aos={`fade-${imagePosition =='left' ? 'right' : 'left'}`}  
            data-aos-once="true">
        </div>
        <div className="project-text-container" data-aos={`fade-${imagePosition}`} data-aos-once="true">
            <div className="title-text">{title} </div>
            <div className="description-text">{description}</div>
            <Link to={`${siteLink}`}><div className="link-to-more">See more</div></Link>
        </div>        
    </div>)
}

export default ProjectBanner;