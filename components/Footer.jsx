import Box from "@mui/material/Box";

const Footer = () => <Box sx={styles.box}>CopyRight 2022 Maru</Box>;

const styles = {
  box: {
    bgcolor: "primary.main",
    color: "white",
    px: 5,
    py: 1,
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    fontSize: 16,
  },
};

export default Footer;
