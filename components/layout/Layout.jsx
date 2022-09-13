import Head from "next/head";
import {Box} from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ isIndex, children }) => {
  return (
    <>
      <Head>
        <title>My ToDo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
    
      </Head>
      <Box sx={styles.outerBox}>
        <Header isIndex={isIndex} />
        <Box sx={styles.box}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

const styles = {
  outerBox: {
    minHeight: "100vh",
    position: "relative",
    paddingBottom: 8,
  },
  box: {
    maxWidth: "lg",
    mx: "auto",
    px: 5,
    pt: 11,
  },
};

export default Layout;