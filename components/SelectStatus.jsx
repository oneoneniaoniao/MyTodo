import React from "react";
import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useRecoilState } from "recoil";
import { todosState } from "./atom/atoms";

const SelectStatus = ({ statusFilter, setStatusFilter }) => {
  const [todos, setTodos] = useRecoilState(todosState);

  return (
    <Stack
      sx={{
        alignItems: "flex-end",
        justifyContent: "flex-end",
        mb: 2,
      }}
      direction="row"
      spacing={1}
    >
      <FilterListIcon sx={{ mb: 0.5 }} />
      <FormControl variant="standard" sx={{ minWidth: 100 }}>
        <InputLabel labelid="filter-label"> Filter </InputLabel>
        <Select
          label="Filter"
          labelid="filter-label"
          id="filter"
          defaultValue={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="todo">Todo</MenuItem>
          <MenuItem value="doing">Doing</MenuItem>
          <MenuItem value="done">Done</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default SelectStatus;
