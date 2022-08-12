import {useState} from "react";
import {getInput, colorPalette} from "../../helper";
import Option from "../Option/Option";

import "../../styles.css";
import "./OptionsContainer.css";

function OptionContainer(props) {
    // default props
    const optiosnDisplay = props.options.map((name,i)=><Option name={name} setName={props.setName} isHidden = {props.isHidden} setIsHidden = {props.setIsHidden} style={props.optionStyle} key={i}></Option>)

    return (
        <div className={`OptionsContainer ${props.isHidden ? "options_container-hide" : "options_container-show"}`} style={props.style}>
            {optiosnDisplay}
        </div>
     );
}

export default OptionContainer;