import {useState} from "react";
import {getInput, colorPalette} from "../helper";
import defaultStyle from "./defaultStyle"

import Label from "../Label/Label";

import "../styles.css";
import "./TextArea.css";

function TextArea(props) {
    // default props
    const [defaultValue, setDefaultValue] = useState("");

    // returns processed input: getInput(userInput, defaultInput)
    const label = getInput(props.label, "");
    const placeHolder = getInput(props.placeHolder, "Type here...");
    const value = getInput(props.value, defaultValue);
    const onChange = getInput(props.onChange, (event)=>setDefaultValue(event.target.value));
    const style = getInput(props.style, defaultStyle);
    const rows = getInput(props.rows, "4");
    const cols = getInput(props.cols, "50");

    return (
        <div className="TextArea" style = {style}>
            <Label name={label} style={style}></Label>
            <textarea
                className = "textarea_input"
                value = {value} 
                onChange = {onChange}
                placeholder = {placeHolder}
                rows={rows} 
                cols={cols}
            >
            </textarea>
        </div>
     );
}

export default TextArea;