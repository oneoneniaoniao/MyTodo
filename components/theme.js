import { blue, yellow, green, lightBlue, indigo, teal,grey,amber } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: blue[300],
    },
    secondary: {
      main: amber[200],
    },
    todo: {
      main: yellow[50],
    }
    ,doing:{
      main: yellow[100],
    },
    done:{
      main:grey[100],
    }
  },
});
theme = responsiveFontSizes(theme);

export default theme;
