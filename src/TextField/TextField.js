import {useState} from "react";
import {getInput, colorPalette} from "../helper";
import {defaultLabelStyle, defaultTextFieldStyle} from "./defaultStyles"

import Label from "../Label/Label";

import "../styles.css";
import "./TextField.css";

function TextField(props) {
    // default props
    const [defaultValue, setDefaultValue] = useState("");

    // returns processed input: getInput(userInput, defaultInput)
    const label = getInput(props.label, "");
    const type = getInput(props.type, "text");
    const placeHolder = getInput(props.placeHolder, "Type here...");
    const value = getInput(props.value, defaultValue);
    const onChange = getInput(props.onChange, (event)=>setDefaultValue(event.target.value));
    const style = getInput(props.style, defaultTextFieldStyle);
    const labelStyle = getInput(props.labelStyle, defaultLabelStyle);
    

    return (
        <div className="TextField" style = {style}>
            <Label name={label} style={labelStyle}></Label>
            <input
                type = {type} 
                value = {value} 
                onChange = {onChange}
                placeholder = {placeHolder}
            >
            </input>
        </div>
     );
}

export default TextField;