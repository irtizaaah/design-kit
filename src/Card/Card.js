import {useState} from "react";
import {getInput, colorPalette} from "../helper";
import defaultStyle from "./defaultStyle"

import "../styles.css";
import "./Card.css";

function Card(props) {
    
    // returns processed input: getInput(userInput, defaultInput)
    const style = getInput(props.style, defaultStyle)
    return (
        <div className="Card" style = {style}>
            {props.innerComponent}
        </div>
     );
}

export default Card;