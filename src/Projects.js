 import { Link } from "react-router-dom"
 
 function Projects() {

    return(<div>
        <div>
            <h2>Personal Projects</h2>
        </div>
        <div>
            <h3>Return of Results</h3>
            <Link to="/returning-research-results">click here for ROR</Link>
        </div>
        <div>
            <h3>Transit Weather Home Dashboard</h3>
            <Link to="/transit-weather-app">click here for my lil app</Link>
        </div>
        <div>
            <h3>Full Moon Fan Club</h3>
            <Link to="/full-moon-fan-club">click here background on the best thing ever</Link>
        </div>
    </div>)
 }

 export default Projects;