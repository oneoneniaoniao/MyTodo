import { RecoilRoot } from "recoil";
import { ThemeProvider} from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import "../styles/globals.css";
import theme from "../components/theme"

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
      </LocalizationProvider>
    </RecoilRoot>
  );
}

export default MyApp;
