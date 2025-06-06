import {useRecoilValue} from "recoil";
import {Box} from "@mui/material";
import {todoListState} from "../recoil/todoState";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useRecoilValue(todoListState);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1.5,
                maxWidth: 480,
                mx: "auto"
            }}
        >
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </Box>
    );
};

export default TodoList;