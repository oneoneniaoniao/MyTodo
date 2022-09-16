import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import {
  TextField,
  Stack,
  Paper,
  Typography,
  Button,
  Box,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function Edit() {
  const [value, setValue] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Layout>
        <Paper sx={{ p: 5, my: 4 }}>
          <Typography variant="h5" mb={2} ml={1}>
            {`Edit task ${"the title"}.`}
          </Typography>
          <Stack component="form" spacing={2}>
            <TextField
              required
              id="task"
              label="Task"
              errorHelperText="Please enter your task in 100 characters."
            />
            <TextField
              id="todo-detail"
              label="Detail"
              multiline
              minRows={3}
              helperText=""
              fullWidth
            />
            <Stack direction="row" spacing={2} fullWidth>
              <FormControl sx={{width:"50%"}}>
                <InputLabel>Status</InputLabel>
                <Select
                  label="Status"
                  labelid="status-label"
                  id="status"
                  defaultValue="todo"
                >
                  <MenuItem value="todo">Todo</MenuItem>
                  <MenuItem value="doing">Doing</MenuItem>
                  <MenuItem value="done">Done</MenuItem>
                </Select>
              </FormControl>
              <DesktopDatePicker
                label="Due date"
                inputFormat="yyyy/MM/dd"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} sx={{width:"50%"}}/>}
              />
            </Stack>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              m={4}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ width: "200px", m: 2 }}
              >
                Add
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Layout>
      <Head>
        <title>My ToDo App - Please add your todo -</title>
      </Head>
    </>
  );
}
