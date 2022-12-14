import {getInput, colorPalette} from "../helper";
import defaultStyle from "./defaultStyle";

import "../styles.css";
import "./Button.css";
import Badge from "../Badge/Badge";

function Button(props) {
    // returns processed input: getInput(userInput, defaultInput)
    const style= getInput(props.style, defaultStyle);
    const name = getInput(props.name, "Submit");
    const onClick = getInput(props.onClick, () => console.log("Button Clicked"));

    return (
        <div className="Button" style = {style}>
            <Badge className="Badge"></Badge>
            <button
                className="button"
                onClick = {onClick}
             >
             {name}
            </button>
        </div>
     );
}

export default Button;