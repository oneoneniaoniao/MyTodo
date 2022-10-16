import React from "react";
import { Typography, Box } from "@mui/material";
import { useTodosState } from "./atom/atoms";

const ToDoSummary = () => {
  const [ todos, setTodos] =useTodosState();
  const todosLength = todos.filter((todo) => todo.status === "todo").length;
  const doingsLength = todos.filter((todo) => todo.status === "doing").length;
  const doneLength = todos.filter((todo) => todo.status === "done").length;
  return (
    <Box sx={{ pt: { xs: 0.5, sm: 1 }, px: { xs: 1, sm: 2 } }}>
      <Typography component="div" sx={{fontSize:["16px", "18px"]}} >
        {"You have..."}
      </Typography>
      <Typography sx={{ ml: 1, mt: 1,fontSize:["16px", "18px"] }}>
        {`🥚 ${todosLength} task${todosLength > 1 ? "s" : ""} not yet started.`}
        <br />
        {`🐣 ${doingsLength} task${doingsLength > 1 ? "s" : ""} in progress.`}
        <br />
        {`🦢 ${doneLength} task${doneLength > 1 ? "s" : ""} Done.`}
      </Typography>
    </Box>
  );
};

export default ToDoSummary;
