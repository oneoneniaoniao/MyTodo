import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function DialogDeleteButton({ onClickDelete }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = ({ id }) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    onClickDelete();
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        sx={{ width: "200px", m: 2 }}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{ m: 2 }}>
          {"Task: "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mx: 2 }}>
            Do you really want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ m: 2 }}>
          <Button
            color="secondary"
            variant="contained"
            autoFocus
            onClick={handleDelete}
            sx={{ width: "100px" }}
          >
            OK
          </Button>
          <Button
            variant="outlined"
            onClick={handleClose}
            autoFocus
            sx={{ width: "100px" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
