import {useState} from "react";
import {getInput, colorPalette} from "../../helper";

import "../../styles.css"
import "./Option.css";

function Option(props) {
    const [isSelected, setIsSelected] = useState(true);

    const handleClick = () => {
        props.setName(props.name);
        props.setIsHidden(!props.isHidden);
    }

    return (
        <div className="Option" style={props.style}>
            <button className="option_button" onClick={handleClick}>
                {props.name}
            </button>
        </div>
     );
}

export default Option;