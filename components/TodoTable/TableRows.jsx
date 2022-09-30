import * as React from "react";
import PropTypes from "prop-types";
import {
  TableCell,
  TableRow,
  Box,
  Stack,
  Collapse,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import getDate from "../utils/getDate";
import { useRouter } from "next/router";
import DialogDeleteItem from "../DialogDeleteItem";
import { useRecoilState } from "recoil";
import { todosState } from "../atom/atoms";

export const CollapsibleTableRow = ({ todo }) => {
  const [open, setOpen] = React.useState(false);
  const [todos, setTodos] = useRecoilState(todosState);

  const onClickDelete = (id) => {
    console.log("onClickDelete: " + id);
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const handleChange = (e, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: e.target.value } : todo
    );
    setTodos(newTodos);
  };

  const router = useRouter();
  const onClickEdit = () => {
    router.push({
      pathname: "/edit",
      query: { id: todo.id },
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
        <TableCell align="center">
          <FormControl variant="standard" sx={{ minWidth: 80 }}>
            <Select
              value={todo.status}
              onChange={(e) => handleChange(e, todo.id)}
            >
              <MenuItem value="todo">Todo</MenuItem>
              <MenuItem value="doing">Doing</MenuItem>
              <MenuItem value="done">Done</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell align="center">
          {todo.dueDate ? getDate(todo.dueDate) : "Not set"}
        </TableCell>
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
                <DialogDeleteItem
                  onClickDelete={(e) => onClickDelete(e, todo.id)}
                >
                  <DeleteOutlinedIcon
                    sx={{
                      fontSize: 26,
                      "&:hover": {
                        cursor: "pointer",
                        color: "rgba(0,0,0,0.5)",
                      },
                    }}
                  />
                </DialogDeleteItem>
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

export const NormalTableRow = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todosState);

  const onClickDelete = (id) => {
    console.log("onClickDelete: " + id);
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const handleChange = (e, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: e.target.value } : todo
    );
    setTodos(newTodos);
  };

  const router = useRouter();
  const onClickEdit = () => {
    router.push({
      pathname: "/edit",
      query: { id: todo.id },
    });
  };
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell component="th" id={todo.id} scope="row">
        {todo.title}
      </TableCell>
      <TableCell>{todo.detail}</TableCell>
      <TableCell align="center">
        <FormControl variant="standard" sx={{ minWidth: 80 }}>
          <Select
            value={todo.status}
            onChange={(e) => handleChange(e, todo.id)}
          >
            <MenuItem value="todo">Todo</MenuItem>
            <MenuItem value="doing">Doing</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </FormControl>
      </TableCell>
      <TableCell align="center">
        {todo.dueDate ? getDate(todo.dueDate) : "Not set"}
      </TableCell>
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
          <DialogDeleteItem onClickDelete={() => onClickDelete(todo.id)}>
            <DeleteOutlinedIcon
              sx={{
                fontSize: 26,
                "&:hover": {
                  cursor: "pointer",
                  color: "rgba(0,0,0,0.5)",
                },
              }}
            />
          </DialogDeleteItem>
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
