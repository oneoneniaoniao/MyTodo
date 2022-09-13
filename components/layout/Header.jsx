import Link from "next/link";
import { Stack, Box, Paper } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Header = ({ isIndex }) => {
  return (
    <Paper sx={styles.paper}>
      <Stack sx={styles.flexRow} direction="row">
        <Box sx={styles.hover}>
          <Link href="/">
            <h1>My TODO</h1>
          </Link>
        </Box>
        {isIndex && (
          <Link href="/add">
            <a>
              <AddBoxIcon sx={styles.hoverIcon} />
            </a>
          </Link>
        )}
      </Stack>
    </Paper>
  );
};

const styles = {
  paper: {
    bgcolor: "primary.main",
    color: "common.white",
    px: 3,
    py: 1,
    borderRadius:0,
    position: "absolute",
    width: "100%",
    top: 0,
  },
  flexRow: {
    maxWidth: "lg",
    mx: "auto",
    direction: "row",
    alignItems: "center",
  },
  hover: {
    textShadow:"0 1px 3px #888",
    "&:hover": {
      cursor:"pointer",
      color: "grey.100",
    },
  },
  hoverIcon: {
    color: "common.white",
    mx: 3,
    fontSize: "32px",
    "&:hover": {
      color: "grey.100",
    },
  },
};
export default Header;
