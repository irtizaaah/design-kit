import {colorPalette} from "../helper";

const defaultStyle={
    // size
    "--width": "15px",
    "--height": "15px",
    "--border-width": "1px",
    "--font-size" : "0.7rem",

    // space
    "--padding": "3px",
    "--margin": "3px",
    
    // shape
    "--border-radius": "50%",

    // color
    "--font-color": colorPalette.onSecondaryColor,
    "--background-color": colorPalette.secondaryColor
}

export default defaultStyle;