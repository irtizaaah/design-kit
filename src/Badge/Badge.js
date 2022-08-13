import {useState} from "react";
import {getInput, colorPalette} from "../helper";
import defaultStyle from "./defaultStyle";

import Label from "../Label/Label";

import "../styles.css";
import "./Badge.css";

function Badge(props) {
    const [defaultNotifications, setDefaultNotifications] = useState(0);

    // returns processed input: getInput(userInput, defaultInput)
    const style = getInput(props.style, defaultStyle);
    const notifications = getInput(props.notifications, defaultNotifications);
    const setNotifications = getInput(props.setNotifications, setDefaultNotifications);

    return (
        <div className={`Badge ${notifications > 0 ? "badge-show" : "badge-hide"}`} style={style}>
            {notifications}
        </div>
     );
}

export default Badge;