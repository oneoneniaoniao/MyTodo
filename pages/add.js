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
import TodoForm from "../components/TodoForm";

export default function Add() {
  return (
    <>
      <Layout>
        <Paper sx={{ p: 5, my: 4 }}>
          <Typography variant="h5" mb={2} ml={1}>
            Add a new task.
          </Typography>
          <TodoForm />
        </Paper>
      </Layout>
      <Head>
        <title>My ToDo App - Please add a task -</title>
      </Head>
    </>
  );
}
