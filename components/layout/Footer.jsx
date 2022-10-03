import {Box, Paper} from "@mui/material";

const Footer = () => <Paper sx={styles.Paper}>CopyRight 2022 Maru</Paper>;

const styles = {
  Paper: {
    bgcolor: "primary.main",
    color: "white",
    px: 5,
    py: 1,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    fontSize: [12,14],
  },
};

export default Footer;
