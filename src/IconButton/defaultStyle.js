import {colorPalette} from "../helper";

const defaultStyle={
    // size
    "--button-width": "100px",
    "--button-height": "40px",
    "--button-border-width": "1px",

    "--icon-width": "30px",
    "--icon-height": "30px",
    "--icon-border-width": "1px",

    // space
    "--padding": "10px",
    "--margin": "10px",
    
    // shape
    "--border-radius": "5px",

    // color
    "--background-color": colorPalette.backgroundColor,
    "--hover-background-color": colorPalette.primaryColorDarkVariant,
    "--active-background-color": colorPalette.primaryColorLightVariant,

    "--shadow-color": colorPalette.shadowColor,
    "--border-color": colorPalette.tertiaryColor,
    "--font-color": colorPalette.onBackgroundColor
}

export default defaultStyle;