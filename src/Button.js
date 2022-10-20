import "./stylesheets/Button.css";

function Button( { link, text}) {

    return(<div>
        <a href={`${link}`} className="button" target="_blank" rel="noreferrer">{text}</a>
    </div>)
}

export default Button;