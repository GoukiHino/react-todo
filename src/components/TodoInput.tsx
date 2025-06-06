import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {Box, Button, TextField} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import {todoListState} from "../recoil/todoState";

const TodoInput = () => {
    const setTodoList = useSetRecoilState(todoListState);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [due, setDue] = useState("");

    const handleAddTodo = () => {
        setTodoList(prevTodos => [
            ...prevTodos,
            {
                id: uuidv4(),
            title: title,
            description: description,
            due: due ? new Date(due) : null,
            isDone: false,
            }
        ]);
        setTitle("");
        setDescription("");
        setDue("");
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                maxWidth: 480,
                mx: "auto",
                mb: 3,
                p: 1.5,
                borderRadius: 1.5,
                boxShadow: 3
        }}
        >
            <TextField
                label="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <TextField
                label="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                multiline
                rows={3}
            />
            <TextField
                label="Due"
                type="datetime-local"
                value={due}
                InputLabelProps={{shrink: true}}
                onChange={e => setDue(e.target.value)}
            />
            <Button
                variant="contained"
                onClick={handleAddTodo}
                disabled={!title}
            >
                Add
            </Button>
        </Box>
    );
};

export default TodoInput;