import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { todosState } from "../components/atoms";

import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";

export default function Home() {
  const todos = useRecoilValue(todosState);
  return (
    <Layout isIndex={true}>
      <Box>
        <h1>My ToDo</h1>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.status}</p>
          </div>
        ))}
      </Box>
    </Layout>
  );
}
