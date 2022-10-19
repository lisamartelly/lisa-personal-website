 import ProjectBanner from "./ProjectBanner.js"
 import returnOfResultsGif from "../static/gifs/return-of-results.gif"
 import transitGif from "../static/gifs/transit-weather-gif.gif"
 import fullMoonEmailPic from "../static/img/full-moon-email.png"
 import carPaintingPic from "../static/img/painting-car.jpg"
 import cuttingBoardPic from "../static/img/cutting-board.jpg"
 import communityGardenPic from "../static/img/community-garden.jpg"

 
 import "./stylesheets/Projects.css";
 
 function Projects() {

    return(<div>
        <div className="tech-projects-section padded">
            <h1 className="text-shadow"><span className="highlight-container"><span className="highlight">Tech</span></span> Projects</h1>
            <div>
            
            </div>
            <ProjectBanner 
                siteLink={"returning-research-results"} 
                title={"Return of Results"} 
                description={"Fullstack web app for sharing research data with participants"} 
                backgroundLink={returnOfResultsGif}
                imagePosition="right"/>

            <ProjectBanner 
                siteLink={"transit-weather-app"} 
                title={"Transit Weather Dashboard"} 
                description={"Simple dashboard to constantly display relevant information in my home"}
                backgroundLink={transitGif}
                imagePosition="left"/>

            <ProjectBanner
                siteLink={"full-moon-fan-club"} 
                title={"Full Moon Fan Club"}
                description={"A social networking/media site for connecting with friends over something cool"}
                backgroundLink={fullMoonEmailPic}
                imagePosition="right"/>

        </div>

        <div className="life-projects-section padded">
            <h1><span className="highlight-container"><span className="highlight">Life</span></span> Projects</h1>
            <div data-aos="fade-left" data-aos-once="true">
            <ProjectBanner 
                siteLink={"painting-my-car"} 
                title={"Painting my Car"} 
                description={"It was pretty cool"}
                backgroundLink={carPaintingPic}
                imagePosition="left"/>
            <ProjectBanner 
                siteLink={"woodworking"} 
                title={"Very Amateur Woodworking"} 
                description={"I like to build shelves, cutting baords, shacks, and carve little trinkets"}
                backgroundLink={cuttingBoardPic}
                imagePosition="right"/>
            <ProjectBanner 
                siteLink={"community"} 
                title={"Community Engagement"} 
                description={"wonder what it's like to be an HOA Vice President?"}
                backgroundLink={communityGardenPic}
                imagePosition="left"/>            

            </div>

            
        </div>
    </div>)
 }

 export default Projects;