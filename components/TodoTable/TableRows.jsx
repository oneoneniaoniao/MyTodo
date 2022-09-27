import * as React from "react";
import PropTypes from "prop-types";
import { TableCell, TableRow, Box, Stack, Collapse } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import getDate from "../utils/getDate";
import { useRouter } from "next/router";

export const CollapsibleTableRow = ({ todo, onClickDelete }) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const onClickEdit = () => {
    router.push({
      pathname: "/edit",
      query: {id:todo.id},
    });
  };
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
              <Stack
                direction="row"
                justifyContent="space-around"
                minWidth="60px"
              >
                <EditOutlinedIcon
                  onClick={onClickEdit}
                  sx={{
                    fontSize: 26,
                    "&:hover": {
                      cursor: "pointer",
                      color: "rgba(0,0,0,0.5)",
                    },
                  }}
                />
                <DeleteOutlinedIcon
                  onClick={() => onClickDelete(todo.id)}
                  sx={{
                    fontSize: 26,
                    "&:hover": {
                      cursor: "pointer",
                      color: "rgba(0,0,0,0.5)",
                    },
                  }}
                />
              </Stack>
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

export const NormalTableRow = ({ todo, onClickDelete }) => {
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell component="th" id={todo.id} scope="row">
        {todo.title}
      </TableCell>
      <TableCell>{todo.detail}</TableCell>
      <TableCell align="center">{todo.status}</TableCell>
      <TableCell align="center">{getDate(todo.dueDate)}</TableCell>
      <TableCell align="right">
        <Stack direction="row" justifyContent="space-around" minWidth="60px">
          <EditOutlinedIcon
          onClick={onClickEdit}
            sx={{
              fontSize: 26,
              "&:hover": {
                cursor: "pointer",
                color: "rgba(0,0,0,0.5)",
              },
            }}
          />
          <DeleteOutlinedIcon
            onClick={() => onClickDelete(todo.id)}
            sx={{
              fontSize: 26,
              "&:hover": {
                cursor: "pointer",
                color: "rgba(0,0,0,0.5)",
              },
            }}
          />
        </Stack>
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
