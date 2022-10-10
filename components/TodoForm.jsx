import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Stack,
  Button,
  Box,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useTodosState } from "./atom/atoms";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import DialogDeleteItem from "./DialogDeleteItem";
import { getDateString } from "../components/utils/getDate";

const TodoForm = () => {
  const [todos, setTodos] = useTodosState();
  const router = useRouter();
  const id = useRouter().query.id;
  const { control, handleSubmit, reset } = useForm({defaultValues:{
    title: "",
    detail: "",
    status: "todo",
    dueDate: null,
  }});

  React.useEffect(() => {
    if (id) {
      const targetTodo = todos.filter((todo) => {
        return id === todo.id;
      })[0];
      if (targetTodo) {
        reset({
          title: targetTodo.title,
          detail: targetTodo.detail,
          status: targetTodo.status,
          dueDate: targetTodo.dueDate,
        });
      }
    }
  }, [reset, todos]);

  const onSubmit = (data) => {
    if (Number.isNaN(new Date(data.dueDate)?.getTime())) {
      alert("The due date is invalid. Please enter a valid date.");
      return;
    } else {
      if (data.dueDate instanceof Date) {
        data = {
          ...data,
          dueDate: getDateString(data.dueDate),
        };
      }
      if (id) {
        const newTodo = todos.map((todo) => {
          return todo.id === id ? { id, ...data } : todo;
        });
        setTodos(newTodo);
      } else {
        setTodos([{ id: uuidv4(), ...data }, ...todos]);
      }
      router.push("/");
    }
  };

  const onClickDelete = () => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    router.push("/");
  };

  const validationRules = {
    task: {
      required: "Please enter your task.",
      maxLength: {
        value: 100,
        message: "Please enter your task in 100 characters or less.",
      },
    },
    detail: {
      maxLength: {
        value: 200,
        message: "Please enter your task's detail in 200 characters or less.",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack alignItems="stretch" justifyContent="center" spacing={3}>
        <Controller
          control={control}
          name="title"
          rules={validationRules.task}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              required
              id="title"
              label="Task"
              error={fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="detail"
          rules={validationRules.detail}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              id="detail"
              label="Detail"
              multiline
              minRows={3}
              error={fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Stack direction="row" spacing={2}>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <FormControl sx={{ width: "50%" }}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select {...field} labelid="status-label" label="Status">
                  <MenuItem value="todo">Todo</MenuItem>
                  <MenuItem value="doing">Doing</MenuItem>
                  <MenuItem value="done">Done</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="dueDate"
            render={({ field }) => (
              <DesktopDatePicker
                {...field}
                id="dueDate"
                label="Due date"
                inputFormat="yyyy/MM/dd"
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "50%" }} />
                )}
              />
            )}
          />
        </Stack>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ width: "200px", m: 2 }}
            type="submit"
          >
            {id ? "Update" : "Add"}
          </Button>
          <Button
            onClick={() => router.push("/")}
            variant="outlined"
            color="primary"
            size="large"
            sx={{ width: "200px", m: 2 }}
            type="button"
          >
            Cancel
          </Button>
          {id && (
            <DialogDeleteItem onClickDelete={onClickDelete}>
              <Button
                color="warning"
                variant="outlined"
                size="large"
                sx={{ width: "200px", m: 2 }}
              >
                Delete
              </Button>
            </DialogDeleteItem>
          )}
        </Box>
      </Stack>
    </form>
  );
};

export default TodoForm;
