import {useState} from "react";
import {getInput, colorPalette} from "../helper";
import {defaultSelectStyle, defaultLabelStyle, defaultOptionsContainerStyle, defaultOptionStyle} from "./defaultStyle";

import Label from "../Label/Label";
import OptionContainer from "./OptionsContainer/OptionsContainer";

import "../styles.css";
import "./Select.css";

function Select(props) {
    const [isHidden, setIsHidden] = useState(true);
    const [name, setName] = useState(props.name ? props.name : "Select");

    // processed input
    const onClick = () => setIsHidden(!isHidden);
    const options = getInput(props.options, ["Item 1","Item 2","Item 3"]);
    const selectStyle = getInput(props.style, defaultSelectStyle);
    const labelStyle = getInput(props.labelStyle, defaultLabelStyle);
    const label = getInput(props.label, "Select");
    const optionsContainerStyle = getInput(props.optionsContainerStyle, defaultOptionsContainerStyle);
    const optionStyle = getInput(props.optionStyle, defaultOptionStyle);

    return (
        <div className="Select" style={selectStyle}>
            <div className = "select-wrapper">
                <Label name={label} style={labelStyle}></Label>
                <button className = "select_button" onClick = {onClick}>{name}</button>
            </div>
            <OptionContainer options = {options} isHidden = {isHidden} setIsHidden = {setIsHidden} setName={setName} style={optionsContainerStyle} optionStyle={optionStyle}></OptionContainer>
        </div>
     );
}

export default Select;