import {colorPalette} from "../helper";

const defaultSelectStyle={
    // size
    "--height": "40px",
    "--width": "220px",
    "--border-width": "1px",

    // space
    "--padding": "10px",
    "--margin": "10px",

    // shape
    "--border-radius": "5px",

    // color
    "--background-color": colorPalette.backgroundColor,
    "--hover-background-color": colorPalette.backgroundColor,
    "--active-background-color": colorPalette.backgroundColor,

    "--hover-border-color": colorPalette.primaryColor,
    "--active-border-color": colorPalette.primaryColor,

    "--border-color": colorPalette.tertiaryColor,
    "--font-color": colorPalette.onBackgroundColor
};

const defaultLabelStyle={
    "--label-font-size" : "0.8rem",
    "--label-font-color": colorPalette.secondaryColor,
}

const defaultOptionsContainerStyle = {
    // shape
    "--border-radius": "5px",
    "--border-width": "1px",

    // color
    "--border-color": colorPalette.tertiaryColor,
    "--background-color": colorPalette.backgroundColor,
    "--shadow-color": colorPalette.shadowColor
}
defaultOptionsContainerStyle["--width"] = "220px";

const defaultOptionStyle = {
    // size
    "--width" : "100%",
    "--height" : "40px",

    // color
    "--border-color": colorPalette.tertiaryColor,
    "--hover-option-background-color": colorPalette.primaryColor,
    "--hover-option-font-color" : colorPalette.onPrimaryColor,
    "--active-option-background-color": colorPalette.primaryColorLightVariant,

    "--shadow-color": colorPalette.shadowColor
}

export {defaultSelectStyle, defaultLabelStyle, defaultOptionsContainerStyle, defaultOptionStyle};

