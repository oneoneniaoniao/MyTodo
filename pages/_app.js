import { RecoilRoot } from "recoil";
import { ThemeProvider} from '@mui/material/styles';

import "../styles/globals.css";
import theme from "../components/theme"

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
