const sizes = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  };

  const colors = {
    primary: "#FF7754",
    secondary: "#444262",
    tertiary: "#312651",
  
    gray: "#83829A",
    gray2: "#C1C0C8",
  
    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
    lightGrey: "#DADADC",

    error: "#F00",
  };

  const fonts = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold",
  }

  const regex = {
    email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    password: /^(?=.*[a-z])(?=.{3,})/ // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/
  }

  const system = {
    secureStorageUserKey: 'activeUsername'
  }

export {
    sizes,
    colors,
    fonts,
    regex,
    system
}