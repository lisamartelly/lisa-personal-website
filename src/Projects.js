 import ProjectCard from "./ProjectCard.js"
 import returnOfResultsGif from "../static/gifs/return-of-results.gif"
 import transitGif from "../static/gifs/transit-weather-gif.gif"
 import fullMoonEmailPic from "../static/img/full-moon-email.png"
 import carPaintingPic from "../static/img/painting-car.jpg"
 import cuttingBoardPic from "../static/img/cutting-board.jpg"
 import communityGardenPic from "../static/img/community-garden.jpg"

 
 import "./stylesheets/Projects.css";
 
 function Projects() {

    return(<div>
        <div data-aos="fade-right" data-aos-once="true">
            <h2><span class="highlight-container"><span class="highlight">Tech</span></span> Projects</h2>
            <div className="project-row">
            <ProjectCard 
                siteLink={"returning-research-results"} 
                title={"Return of Results"} 
                description={"click here"} 
                backgroundLink={returnOfResultsGif}/>

            <ProjectCard 
                siteLink={"transit-weather-app"} 
                title={"Transit Weather Home Dashboard"} 
                description={"click here"}
                backgroundLink={transitGif}/>
            <ProjectCard 
                siteLink={"full-moon-fan-club"} 
                title={"Full Moon Fan Club"} 
                description={"click here"}
                backgroundLink={fullMoonEmailPic}/>
            </div>
        </div>

        <div data-aos="fade-left" data-aos-once="true">
            <h2><span class="highlight-container"><span class="highlight">Life</span></span> Projects</h2>
            <div className="project-row">
            <ProjectCard 
                siteLink={"painting-my-car"} 
                title={"Painting my Car"} 
                description={"It was pretty cool"}
                backgroundLink={carPaintingPic}/>
            <ProjectCard 
                siteLink={"woodworking"} 
                title={"Very Amateur Woodworking"} 
                description={"I like to build shelves, cutting baords, shacks, and carve little trinkets"}
                backgroundLink={cuttingBoardPic}/>
            <ProjectCard 
                siteLink={"community"} 
                title={"Community Engagement"} 
                description={"wonder what it's like to be an HOA Vice President?"}
                backgroundLink={communityGardenPic}/>            

            </div>

            
        </div>
    </div>)
 }

 export default Projects;