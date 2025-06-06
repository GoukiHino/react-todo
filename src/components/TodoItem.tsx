import {useSetRecoilState} from "recoil";
import {Box, Checkbox, IconButton, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type {Todo} from "../types/todo";
import {todoListState} from "../recoil/todoState";

type Props = {
    todo: Todo;
};

const TodoItem = ({todo}: Props) => {
    const setTodos = useSetRecoilState(todoListState);

    const handleToggle = () => {
        setTodos(prevTodos =>
            prevTodos.map(prevTodo =>
                prevTodo.id === todo.id ? {...prevTodo, isDone: !prevTodo.isDone} : prevTodo
            )
        );
    };

    const handleDelete = () => {
        setTodos(prevTodos =>
            prevTodos.filter(prevTodo => prevTodo.id !== todo.id)
        );
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                width: "100%",
                p: 1.5,
                borderRadius: 1.5,
                boxShadow: 3
            }}
        >
            <Checkbox checked={todo.isDone} onChange={handleToggle}/>
            <Box flex={1}>
                <Typography variant="h6">{todo.title}</Typography>
                <Typography>{todo.description}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {todo.due ? todo.due.toLocaleString() : null}
                </Typography>
            </Box>
            <IconButton sx={{ml: "auto"}} onClick={handleDelete}>
                <DeleteIcon/>
            </IconButton>
        </Box>
    );
};

export default TodoItem;