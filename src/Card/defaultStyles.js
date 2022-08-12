import {colorPalette} from "../helper"; 

const defaultCardStyle={
    // structure
    "--display": "flex",
    "--justify-content": "center",
    "--align-items": "flex-start",

    // size
    "--height": "500px",
    "--width": "350px",

    // space
    "--padding": "50px",
    "--margin": "10px",

    // shape
    "--border-radius": "10px",

    // color
    "--background-color": colorPalette.backgroundColor,
    "--border-color": colorPalette.backgroundColor,
    "--shadow-color" : colorPalette.shadowColor
}
export {defaultCardStyle}