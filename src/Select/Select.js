import {useState} from "react";
import {getInput, colorPalette} from "../helper";
import defaultStyle from "./defaultStyle";

import Label from "../Label/Label";
import OptionContainer from "./OptionsContainer/OptionsContainer";

import "../styles.css";
import "./Select.css";

function Select(props) {
    const [isHidden, setIsHidden] = useState(true);
    const [value, setValue] = useState(props.value ? props.value : "Select");

    // returns processed input: getInput(userInput, defaultInput)
    const onClick = () => setIsHidden(!isHidden);
    const options = getInput(props.options, ["Item 1","Item 2","Item 3"]);
    const label = getInput(props.label, "Select");
    const style = getInput(props.style, defaultStyle);

    return (
        <div className="Select" style={style}>
            <div className = "select-wrapper">
                <Label name={label}></Label>
                <button className = "select_button" onClick = {onClick}>
                    {value}
                    <span className = {`button_pointer ${isHidden ? "button_pointer-hide" : "button_pointer-show"}`}>▲</span>
                    <span className = {`button_pointer ${isHidden ? "button_pointer-show" : "button_pointer-hide"}`}>▼</span>
                </button>
            </div>
            <OptionContainer options = {options} isHidden = {isHidden} setIsHidden = {setIsHidden} setValue={setValue}></OptionContainer>
        </div>
     );
}

export default Select;