import { Link } from "react-router-dom";

import "./stylesheets/Footer.css"


function Footer() {
    return(<div>
        <div id="footer-section">
            <Link to="https://github.com/lisamartelly/personal-website">Made</Link> by Lisa Murray
        </div>
    </div>)
}

export default Footer;