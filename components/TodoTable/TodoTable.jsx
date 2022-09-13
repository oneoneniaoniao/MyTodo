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
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { todosState } from "../atoms";

import { NormalTableHead, CollapsibleTableHead } from "./TableHeads";
import { NormalTableRow, CollapsibleTableRow } from "./TableRows";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const TodoTable = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const todos = useRecoilValue(todosState);

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

  return (
    <>
      <Paper sx={{ overflow: "auto", maxWidth: "1100px", m: "auto" }}>
        <TableContainer sx={{ m: "auto" }}>
          <Typography
            sx={{ py: { xs: 2, sm: 3 }, px: { xs: 1, sm: 2 } }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {`You have 2 tasks in progress.`}
          </Typography>
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
              {todos
                .slice()
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((todo, index) => {
                  return matches ? (
                    <NormalTableRow key={todo.id} todo={todo} />
                  ) : (
                    <CollapsibleTableRow key={todo.id} todo={todo} />
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
