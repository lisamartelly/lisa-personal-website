import "./stylesheets/ProjectBanner.css";


function ProjectBanner({ title, description, stack, backgroundLink, imagePosition, children}) {
    return(<div className={`project-banner image-${imagePosition}`}>
        <div className="project-image-container box-shadow" 
            style={{ backgroundImage: `url(${backgroundLink})` }} 
            data-aos={`fade-${imagePosition =='left' ? 'right' : 'left'}`}  
            data-aos-once="true">
        </div>
        <div className="project-text-container" data-aos={`fade-${imagePosition}`} data-aos-once="true">
            <div className="title-text">{title} </div>
            <div className="description-text">{description}</div>
            
            <div className="project-stack">{ stack ? <b>Stack:</b> : ''} {stack}</div>
            <div className="button-row">{children}</div>
        </div>        
    </div>)
}

export default ProjectBanner;