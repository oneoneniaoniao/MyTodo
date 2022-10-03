import { blue, yellow, green, lightBlue, indigo, teal, amber } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: blue[300],
    },
    secondary: {
      main: amber[200],
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
