import { Link } from "react-router-dom";

import "./stylesheets/ProjectCard.css";


function ProjectCard({ title, siteLink, description, backgroundLink}) {
    return(<div>
        <Link to={`${siteLink}`}>
                <div className="card-container">
                    <img src={backgroundLink} alt={title} className="image"/>
                    <div className="title">
                        <div className="text">{title}</div>
                    </div>
                    <div className="description">
                        <div className="text">{description}</div>
                    </div>
                </div>
        </Link>
        
    </div>)
}

export default ProjectCard;