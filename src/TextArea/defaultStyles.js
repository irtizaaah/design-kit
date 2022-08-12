import {colorPalette} from "../helper"; 

const defaultTextAreaStyle={
    // size
    "--height": "18px",
    "--width": "200px",

    // space
    "--padding": "10px",
    "--margin": "40px",

    // shape
    "--border-radius": "5px",

    // color
    "--background-color": colorPalette.tertiaryColorLightVariant,
    "--focus-background-color": colorPalette.primaryColor,
    "--placeholder-font-color": colorPalette.tertiaryColor,

    "--border-color": colorPalette.backgroundColor,
    "--input-font-color": colorPalette.onTertiary,
    "--shadow-color" : colorPalette.shadowColor
}

const defaultLabelStyle={
    "--label-font-size" : "0.8rem",
    "--label-font-color": colorPalette.secondaryColor,
}

export {defaultTextAreaStyle, defaultLabelStyle}