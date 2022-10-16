import * as React from "react";
import PropTypes from "prop-types";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const headCells = [
  { id: "title", label: "Title", align: "left", sx: { minWidth: "120px", padding:[0.5,1] } },
  {
    id: "detail",
    label: "Detail",
    align: "left",
    sx: { minWidth: "calc(100% - 660px), padding:[0.5,1]" },
  },
  { id: "status", label: "Status", align: "center", sx: { minWidth: "80px", padding:[0.5,1] } },
  {
    id: "dueDate",
    label: "Due date",
    align: "center",
    sx: { minWidth: "110px", padding:[0.5,1] },
  },
  { id: "util", label: "", align: "right", sx: { width: "80px", padding:[0.5,1] } },
];

export const NormalTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (prop) => (event) => {
    onRequestSort(event, prop);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => {
          return headCell.id !== "detail" ? (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={headCell.sx}
              align={headCell.align}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={
                  headCell.id === "detail"
                    ? null
                    : createSortHandler(headCell.id)
                }
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

NormalTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export const CollapsibleTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (prop) => (event) => {
    onRequestSort(event, prop);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => {
          return headCell.id !== "detail" && headCell.id !== "util" ? (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={headCell.sx}
              align={headCell.align}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ) : null;
        })}
      </TableRow>
    </TableHead>
  );
};

CollapsibleTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};
