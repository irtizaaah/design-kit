import {getInput, colorPalette} from "../helper";
import defaultStyle from "./defaultStyle";

import "../styles.css";
import "./Label.css";

function Label(props) {
    
    // returns processed input: getInput(userInput, defaultInput)
    const name = getInput(props.name, "");
    const style = getInput(props.style, defaultStyle);

    return (
        <div className="Label" style={style}>
            <label>{name}</label>
        </div>
     );
}

export default Label;