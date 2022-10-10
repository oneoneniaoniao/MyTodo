import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Paper, Typography } from "@mui/material";
import TodoForm from "../components/TodoForm";

export default function Edit() {
  return (
    <>
      <Layout>
        <Paper sx={{ p: 5, my: 4 }}>
          <Typography variant="h5" mb={2} ml={1}>
            Edit your task.
          </Typography>
          <TodoForm />
        </Paper>
      </Layout>
      <Head>
        <title>My ToDo App - Please edit your todo -</title>
      </Head>
    </>
  );
}
