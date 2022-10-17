import { Link } from "react-router-dom";

import "./stylesheets/ProjectCard.css";


function ProjectCard({ title, siteLink, description, backgroundLink}) {
    return(<div>
        <Link to={`${siteLink}`}>
                <div className="card-container">
                    <img src={backgroundLink} alt={title} className="project-image"/>
                    <div className="title text">{title}</div>
                    <div className="description text">{description}</div>
                </div>
        </Link>
        
    </div>)
}

export default ProjectCard;