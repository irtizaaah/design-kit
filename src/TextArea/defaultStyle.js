import {colorPalette} from "../helper"; 

const defaultTextAreaStyle={
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
    "--background-color": colorPalette.tertiaryColorLightVariant,
    "--focus-background-color": colorPalette.tertiaryColor,
    "--placeholder-font-color": colorPalette.tertiaryColor,

    "--border-color": colorPalette.backgroundColor,
    "--input-font-color": colorPalette.onTertiary,
    "--shadow-color" : colorPalette.shadowColor,

    // Label

    "--label-font-size" : "0.8rem",
    "--label-font-color": colorPalette.onBackgroundColor,
}

export default defaultTextAreaStyle