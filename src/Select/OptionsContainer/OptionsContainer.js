import {useState} from "react";
import {getInput, colorPalette} from "../../helper";
import Option from "../Option/Option";

import "../../styles.css";
import "./OptionsContainer.css";

function OptionContainer(props) {
    // default props
    const optiosnDisplay = props.options.map((value,i)=><Option value={value} setValue={props.setValue} isHidden = {props.isHidden} setIsHidden = {props.setIsHidden} optionStyle={props.optionStyle} key={i}></Option>)

    return (
        <div className={`OptionsContainer ${props.isHidden ? "options_container-hide" : "options_container-show"}`} style={props.optionsContainerStyle}>
            {optiosnDisplay}
        </div>
     );
}

export default OptionContainer;