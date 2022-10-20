 import ProjectBanner from "./ProjectBanner.js"
 import Button from "./Button.js"
 import returnOfResultsGif from "../static/gifs/return-of-results.gif"
 import transitGif from "../static/gifs/transit-weather.gif"
 import fullMoonEmailPic from "../static/img/full-moon-email.png"
 import carPaintingGif from "../static/gifs/car-painting.gif"
 import woodworkingGif from "../static/gifs/woodworking.gif"
 import communityGardenPic from "../static/img/community-garden.jpg"

 
 import "./stylesheets/Projects.css";
 
 function Projects() {

    return(<div>
        <div id="tech-projects-section" className="padded">
            <h1 className="text-shadow"><span className="highlight-container"><span className="highlight">Tech</span></span> Projects</h1>
            <div>
            
            </div>
            <ProjectBanner 
                title="Return of Results"
                description="Fullstack web app for sharing research data with participants"
                stack="Python, etc, etc"
                backgroundLink={returnOfResultsGif}
                imagePosition="right"
                >
                    <Button 
                        link="https://github.com/lisamartelly/return-of-results"
                        text="GitHub"
                    />
                    <Button 
                        link="https://www.youtube.com/watch?v=g_9kZTswXig"
                        text="Video Demo"
                    />
                    </ProjectBanner>

            <ProjectBanner 
                title={"Transit Weather Dashboard"} 
                description={"Simple dashboard to constantly display relevant information in my home"}
                backgroundLink={transitGif}
                imagePosition="left"
                >
                    <Button 
                        link="https://github.com/lisamartelly/weather-transit-app"
                        text="GitHub"
                    />
                    </ProjectBanner>

            <ProjectBanner
                title={"Full Moon Fan Club - in progress"}
                description={"A social networking/media site for connecting with friends over something cool"}
                backgroundLink={fullMoonEmailPic}
                imagePosition="right"
                >
                    <Button 
                        link="mailto:thomasarhanna@gmail.com?subject=Please add me to the Full Moon Fan Club Newsletter!"
                        text="Join the Club"
                    />
                    <Button 
                        link="https://github.com/lisamartelly/full-moon-fan-club"
                        text="GitHub - in progress"
                    />
                    </ProjectBanner>
                    

        </div>

        <div id="life-projects-section" className="padded">
            <h1><span className="highlight-container"><span className="highlight">Life</span></span> Projects</h1>
            <div>
            <ProjectBanner 
                title="Very Amateur Woodworking"
                description="I like to build shelves, cutting baords, shacks, and carve little trinkets"
                backgroundLink={woodworkingGif}
                imagePosition="left"/>
            <ProjectBanner 
                title="Painting my Car"
                description="It was pretty cool"
                backgroundLink={carPaintingGif}
                imagePosition="right"/>
            <ProjectBanner 
                title="Community Engagement"
                description="wonder what it's like to be an HOA Vice President?"
                backgroundLink={communityGardenPic}
                imagePosition="left"/>            
            </div>

            
        </div>
    </div>)
 }

 export default Projects;