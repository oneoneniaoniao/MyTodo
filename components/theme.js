import { blue, deepOrange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import defaultTheme from "@mui/material/styles";
import { useRecoilBridgeAcrossReactRoots_UNSTABLE } from "recoil";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[300],
    },
    // secondary: {
    //   main: deepOrange[400],
    // },
  },
});

export default theme;
