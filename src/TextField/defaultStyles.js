import {colorPalette} from "../helper"; 

const defaultTextFieldStyle={
    // size
    "--height": "18px",
    "--width": "200px",
    "--border-width": "1px",

    // space
    "--padding": "10px",
    "--margin": "10px",

    // shape
    "--border-radius": "5px",

    // color
    "--background-color": colorPalette.backgroundColor,
    "--focus-background-color": colorPalette.primaryColor,

    "--input-font-color": colorPalette.onBackgroundColor,
    "--placeholder-font-color": colorPalette.tertiaryColor,
    "--border-color": colorPalette.tertiaryColor,
    "--shadow-color" : colorPalette.shadowColor
}

const defaultLabelStyle={
    "--label-font-size" : "0.8rem",
    "--label-font-color": colorPalette.secondaryColor,
}

export {defaultTextFieldStyle, defaultLabelStyle}