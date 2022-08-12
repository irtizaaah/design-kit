const getInput = (userInput, defaultInput) => { // checks whether to override default config with user config
  
    if(typeof userInput === 'object' && !(userInput instanceof Array)){ // user config overrides default config
        // arrays are objects in js, but the only objects we are filtering out are ones used for "style config" not arrays
        if(userInput) return {...userInput, ...defaultInput};
        return defaultInput;
    }

    else{   // user style config appends to default config (if there are duplicate configs, user configs overrides default configs)
        if(userInput) return userInput;
        return defaultInput;
    }
};

const colorPalette = {
    // Primary color is the color displayed most frequently across your app's screens and components.
    // They come in a darker and lighter shade/variant
    "primaryColor": "#1C75FF",
    "primaryColorDarkVariant" : "#0355D6",
    "primaryColorLightVariant" : "#4A91FF", 

    // A secondary color provides more ways to accent and distinguish your product. 
    // This is optional (a primary color can replace this).
    "secondaryColor": "#06283D",
    "secondaryColorDarkVariant" : "#06283D",
    "secondaryColorLightVariant" : "#06283D",

    // A tertiary color is subtle as to avoid being distracting
    "tertiaryColor" : "#A2B5BB",
    "tertiaryColorDarkVariant" : "#A2B5BB",
    "tertiaryColorLightVariant" : "#edeff0",

    // Surface colors affect surfaces of components, such as cards, sheets, and menus.
    "surfaceColor" : "white",

    // The background color appears behind scrollable content
    // Error color indicates errors in components, such as invalid text in a text field. 
    "backgroundColor" : "white",
    "errorColor" : "#EB4747",

    // “on” colors refer to the fact that they color elements that appear “on” top of surfaces
    // that use the following colors: a primary color, secondary color, surface color, background color, or error color. 
    // This are important for typography and iconography colors
    "onPrimaryColor" : "white",
    "onSecondaryColor" :"white",
    "onTertiary" : "#06283D",
    "onSurfaceColor" : "white",
    "onBackgroundColor" : "#06283D",
    "onErrorColor" : "white",

    "shadowColor" : "#A2B5BB",
}

export {getInput, colorPalette};