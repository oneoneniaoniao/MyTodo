import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { todosState } from "../atom/atoms";
import { NormalTableHead, CollapsibleTableHead } from "./TableHeads";
import { NormalTableRow, CollapsibleTableRow } from "./TableRows";

function descendingComparator(a, b, orderBy) {
  
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  console.log("b[orderBy]=== a[orderBy]")
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const TodoTable = ({ statusFilter }) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [todos, setTodos] = useRecoilState(todosState);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - todos.length) : 0;

  const onClickDelete = (id) => {
    console.log("onClickDelete: " + id);
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const filteredTodos = statusFilter
    ? todos.filter((todo) => todo.status === statusFilter)
    : todos;

  return (
    <>
      <Paper sx={{ overflow: "auto", maxWidth: "1100px", m: "auto" }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            {matches ? (
              <NormalTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={todos.length}
              />
            ) : (
              <CollapsibleTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={todos.length}
              />
            )}

            <TableBody>
              {filteredTodos
                .slice()
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((todo, index) => {
                  return matches ? (
                    <NormalTableRow
                      key={todo.id}
                      todo={todo}
                      onClickDelete={onClickDelete}
                    />
                  ) : (
                    <CollapsibleTableRow
                      key={todo.id}
                      todo={todo}
                      onClickDelete={onClickDelete}
                    />
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={todos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default TodoTable;
