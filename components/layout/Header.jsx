import Link from "next/link";
import { Stack, Box, Paper , Typography} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Header = ({ isIndex }) => {
  return (
    <Paper sx={styles.paper}>
      <Stack sx={styles.flexRow} direction="row">
        <Box sx={styles.hover}>
          <Link href="/">
            <Typography variant="h4">My TODO</Typography>
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
    fontSize: [15,24],
    "&:hover": {
      color: "grey.100",
    },
  },
  title:{
    fontWeight:700,
    fontSize: [15,24],
  }
};
export default Header;
