import { Link } from "react-router-dom";

import "./stylesheets/ProjectCard.css";


function ProjectCard({ title, siteLink, description, backgroundLink}) {
    return(
    <div className="card-wrapper">
        <Link to={`${siteLink}`}>
            <div className="card-background"  style={{ backgroundImage: `url(${backgroundLink})` }}>
                {/* <div className="card-title text">{title}</div> */}
            </div>
            <div className="card-overlay">
                <div className="card-description text">{description}</div>
            </div>
        </Link> 
        
    </div>)
}

export default ProjectCard;