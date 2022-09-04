import { blue, deepOrange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[300],
      light: blue[50],
      dark: blue[500]
    },
    secondary: {
      main: deepOrange[400],
      light: deepOrange[200],
      dark: deepOrange[500]
    },
  },
});

export default theme;
