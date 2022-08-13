import {getInput, colorPalette} from "../helper";
import defaultStyle from "./defaultStyle";

import "../styles.css";
import "./IconButton.css";
import Badge from "../Badge/Badge";

function IconButton(props) {
    // returns processed input: getInput(userInput, defaultInput)
    const style= getInput(props.style, defaultStyle);
    const onClick = getInput(props.onClick, () => console.log("Icon Button Clicked"));

    return (
        <div className="IconButton" style = {style}>
            <Badge className="Badge"></Badge>
            <button className="button_element" onClick = {onClick}>
                <img className="button_element_icon" src={props.icon} alt="icon" />
            </button>
        </div>
     );
}

export default IconButton;