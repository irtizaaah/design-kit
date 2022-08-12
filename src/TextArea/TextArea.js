import {useState} from "react";
import {getInput, colorPalette} from "../helper";
import {defaultLabelStyle, defaultTextAreaStyle} from "./defaultStyles"

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
    const textAreaStyle = getInput(props.style, defaultTextAreaStyle);
    const labelStyle = getInput(props.labelStyle, defaultLabelStyle);
    const rows = getInput(props.rows, "4");
    const cols = getInput(props.cols, "50");

    return (
        <div className="TextArea" style = {textAreaStyle}>
            <Label name={label} style={labelStyle}></Label>
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