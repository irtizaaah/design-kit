import {colorPalette} from "../helper";

const defaultStyle={
    //Select
    // size
    "--select-height": "40px",
    "--select-width": "220px",
    "--select-border-width": "1px",

    // space
    "--select-padding": "10px",
    "--select-margin": "10px",

    // shape
    "--select-border-radius": "5px",

    // color
    "--select-background-color": colorPalette.backgroundColor,
    "--select-hover-background-color": colorPalette.backgroundColor,
    "--select-active-background-color": colorPalette.backgroundColor,

    "--select-hover-border-color": colorPalette.primaryColor,
    "--select-active-border-color": colorPalette.primaryColor,

    "--select-border-color": colorPalette.tertiaryColor,
    "--select-font-color": colorPalette.onBackgroundColor,

    // Label
    "--label-font-size" : "0.8rem",
    "--label-font-color": colorPalette.secondaryColor,

    // Options Container
    // size
        // updated down below
    // shape
    "--options_container-border-radius": "5px",
    "--options_container-border-width": "1px",
    "--options_container-shadow-color": colorPalette.shadowColor,

    // color
    "--options_container-border-color": colorPalette.tertiaryColor,
    "--options_container-background-color": colorPalette.backgroundColor,
    
    // Option
    // size
    "--option-width" : "100%",
    "--option-height" : "40px",

    // space
    "--option-padding": "10px",

    // shape
    "--option-border-radius": "5px",

    // color
    "--option-font-color" : colorPalette.onBackgroundColor,
    "--option-hover-font-color" : colorPalette.onPrimaryColor,

    "--option-hover-background-color": colorPalette.primaryColor,
    "--option-active-background-color": colorPalette.primaryColorLightVariant
}

// Options Container
// size
defaultStyle["--options_container-width"] = defaultStyle["--select-width"];
export default defaultStyle;

