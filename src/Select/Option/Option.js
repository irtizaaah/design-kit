import {useState} from "react";
import {getInput, colorPalette} from "../../helper";

import "../../styles.css"
import "./Option.css";

function Option(props) {
    const handleClick = () => {
        props.setValue(props.value);
        props.setIsHidden(!props.isHidden);
    }

    return (
        <div className="Option" style={props.optionStyle}>
            <button className="option_button" onClick={handleClick}>
                {props.value}
            </button>
        </div>
     );
}

export default Option;