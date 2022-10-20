 import ProjectBanner from "./ProjectBanner.js"
 import Button from "./Button.js"
 import returnOfResultsGif from "../static/gifs/return-of-results.gif"
 import transitGif from "../static/gifs/transit-weather.gif"
 import fullMoonEmailPic from "../static/img/full-moon-email.png"
 import personalWebsitePic from "../static/img/personal-website-ss.png"
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
                description="For my bootcamp capstone project I created an app for sharing/returning data with research participants. It has a researcher side to plan which data will be shared, store results, and share results. There are administrative capabilities as well. It also has a participant side (like a patient portal) to view results."
                stack="Python, JavaScript, Jinja, React, Flask, CSS, SQL, PostgreSQL, REST Api, AWS"
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
                description={"I made this to better learn and understand React! It is a dashboard that displays incoming bus information for the 3 bus-stops by my house. It also displays the weather. If you watch closely, you'll see an example of an ETA update. Soon this will run 24/7 on a monitor-mounted Raspberry Pi by my door :)"}
                backgroundLink={transitGif}
                imagePosition="left"
                stack="JavaScript, React, SCSS"
                >
                    <Button 
                        link="https://github.com/lisamartelly/weather-transit-app"
                        text="GitHub"
                    />
                </ProjectBanner>

            <ProjectBanner
                title={"Full Moon Fan Club - in progress"}
                description={"This project started as the email in the accompanying photo. A friend hatched the idea to connect each month over the full moon. I thought it'd be the perfect opportunity to dabble in other langues and tech and create a fullstack social media forum! Full site forthcoming - in the meantime you can join the original newsletter listserv by emailing Tom (see button below)."}
                backgroundLink={fullMoonEmailPic}
                imagePosition="right"
                stack="JavaScript, React, Express, Node.js, MongoDB, SCSS, GraphQL"
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

            <ProjectBanner
                title={"My Personal Website"}
                description={"You guessed it - I made this website! While making this I further practiced my React-best-practices, learned more about responsive design, and picked up some new CSS tricks along the way. This was my first time deploying a website on Firebase, as well."}
                backgroundLink={personalWebsitePic}
                imagePosition="left"
                stack="JavaScript, React, CSS, Firebase"
                >
                    <Button 
                        link="https://github.com/lisamartelly/lisa-personal-website"
                        text="GitHub"
                    />
                    </ProjectBanner>
                    

        </div>

        <div id="life-projects-section" className="padded">
            <h1><span className="highlight-container"><span className="highlight">Life</span></span> Projects</h1>
            <div>
            <ProjectBanner 
                title="Very Amateur Woodworking"
                description="I love to build things, be self sufficient, and make art. After acquiring some tools I have so far built the perfect pantry shelves for my condo, crafted a beautiful cutting board, learned woodcarving, and I also took a 5-day course on how to build 'Thoreau's Cabin'. I look forward to upgrading to a house one day so I have more excuses to build things for it."
                backgroundLink={woodworkingGif}
                imagePosition="right"/>
            <ProjectBanner 
                title="Car Makeover"
                description="I bought a 22-year old Honda in rough shape from a farmer and endeavored to give it a glow-up. I went to a junk yard and got a non-dented quarter panel, some interior doo-dads that were missing, patched up the dents and rusty spots, and spent 3 days painting the exterior a nice aqua color using regular Rustoleum spray paint, of all things. Very pleased with the result and to have learned so much about my car in the process!"
                backgroundLink={carPaintingGif}
                imagePosition="left"/>
            <ProjectBanner 
                title="Community Engagement"
                description="I am lucky to live in a vibrant, walkable, diverse neighborhood of Minneapolis. I volunteer with the local volunteer network at community events and cleanups, I co-led a community garden last summer, and am the Vice President of my condo's HOA (it's really not as bad as you'd think). When feeling stressed about the fate of the world, being engaged with my community is the best antidote."
                backgroundLink={communityGardenPic}
                imagePosition="right"/>            
            </div>

            
        </div>
    </div>)
 }

 export default Projects;