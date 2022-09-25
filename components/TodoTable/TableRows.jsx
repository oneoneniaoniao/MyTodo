import * as React from "react";
import PropTypes from "prop-types";
import { TableCell, TableRow, Box, Stack, Collapse } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import getDate from "../utils/getDate";

export const CollapsibleTableRow = ({ todo }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell sx={{ pr: 0, py: 1 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {todo.title}
        </TableCell>
        <TableCell align="center">{todo.status}</TableCell>
        <TableCell align="center">{getDate(todo.dueDate)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack
              direction="row"
              sx={{
                mx: 1,
                mt: 1,
                mb: 2,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box ml={8}>{todo.detail}</Box>
              <Box align="right" minWidth="100px">
                <EditOutlinedIcon
                  sx={{
                    fontSize: 26,
                    "&:hover": {
                      cursor: "pointer",
                      color: "rgba(0,0,0,0.5)",
                    },
                  }}
                />
                <DeleteOutlinedIcon
                  sx={{
                    fontSize: 26,
                    "&:hover": {
                      cursor: "pointer",
                      color: "rgba(0,0,0,0.5)",
                    },
                  }}
                />
              </Box>
            </Stack>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

CollapsibleTableRow.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    dueDate: PropTypes.instanceOf(Date).isRequired,
    detail: PropTypes.string.isRequired,
  }).isRequired,
};

export const NormalTableRow = ({ todo }) => {
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell component="th" id={todo.id} scope="row">
        {todo.title}
      </TableCell>
      <TableCell>{todo.detail}</TableCell>
      <TableCell align="center">{todo.status}</TableCell>
      <TableCell align="center">{getDate(todo.dueDate)}</TableCell>
      <TableCell align="right">
        <EditOutlinedIcon
          sx={{
            fontSize: 26,
            "&:hover": {
              cursor: "pointer",
              color: "rgba(0,0,0,0.5)",
            },
          }}
        />
        <DeleteOutlinedIcon
          sx={{
            fontSize: 26,
            "&:hover": {
              cursor: "pointer",
              color: "rgba(0,0,0,0.5)",
            },
          }}
        />
      </TableCell>
    </TableRow>
  );
};

NormalTableRow.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    dueDate: PropTypes.instanceOf(Date).isRequired,
    detail: PropTypes.string.isRequired,
  }).isRequired,
};
