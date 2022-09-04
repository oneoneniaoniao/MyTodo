import Link from "next/link";
import Box from "@mui/material/Box";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Header = ({ isIndex }) => {
  return (
    <Box sx={styles.outerBox}>
      <Box sx={styles.box}>
        <Box sx={styles.hover}>
          <Link href="/">
            <h1>My ToDo App</h1>
          </Link>
        </Box>
        {isIndex && (
          <Box sx={styles.hover}>
            <Link href="/add">
              <a>
                <AddBoxIcon sx={styles.hoverIcon} />
              </a>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const styles = {
  outerBox: {
    bgcolor: "primary.main",
    color: "white",
    px: 3,
    py: 1,
    position: "absolute",
    width: "100%",
    top: 0,
  },
  box: {
    maxWidth: "lg",
    mx: "auto",
    display: "flex",
    alignItems: "center",
  },
  hover: {
    "&:hover": {
      color: "primary.light",
      cursor: "pointer",
    },
  },
  hoverIcon: {
    color: "white",
    mx: 3,
    fontSize: "32px",
    "&:hover": {
      color: "primary.light",
    },
  },
};
export default Header;
