import {colorPalette} from "../helper";

const defaultStyle={
    // size
    "--width": "100px",
    "--height": "40px",

    // space
    "--padding": "10px",
    "--margin": "10px",
    
    // shape
    "--border-radius": "5px",

    // color
    "--background-color": colorPalette.primaryColor,
    "--hover-background-color": colorPalette.primaryColorDarkVariant,
    "--active-background-color": colorPalette.primaryColorLightVariant,

    "--shadow-color": colorPalette.shadowColor,
    "--border-color": colorPalette.primaryColor,
    "--font-color": colorPalette.onPrimaryColor
}

export default defaultStyle;