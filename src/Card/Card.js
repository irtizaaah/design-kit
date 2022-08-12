import {useState} from "react";
import {getInput, colorPalette} from "../helper";
import {defaultCardStyle} from "./defaultStyles"

import "../styles.css";
import "./Card.css";

function Card(props) {
    // process input
    const style = getInput(props.style, defaultCardStyle)
    return (
        <div className="Card" style = {style}>
            {props.innerComponent}
        </div>
     );
}

export default Card;