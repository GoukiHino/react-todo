import React, {useRef} from "react";
import {useSetRecoilState} from "recoil";
import {Button, TextField} from "@mui/material";

import {todoListAtom} from "../../atoms/todoList";

let id = 1;
const getId = () => {
    return id++;
};

type Props = {
    handleClose: () => void;
}

const TodoForm = ({handleClose}: Props) => {
    const title = useRef<HTMLInputElement>(null!);
    const description = useRef<HTMLInputElement>(null!);

    const setTodoList = useSetRecoilState(todoListAtom);

    const handleAdd = () => {
        setTodoList((prev) => [
            ...prev,
            {
                id: getId(),
                title: title.current.value,
                description: description.current.value,
                isCompleted: false
            }
        ]);
        handleClose();
    };
    return (
        <>
            <TextField label="Title" inputRef={title} sx={{mb: 2}} fullWidth required/>
            <TextField label="Description" inputRef={description} sx={{mb: 2}} minRows={5} multiline fullWidth/>
            <Button variant="contained" color="primary" onClick={handleAdd} fullWidth>Add</Button>
        </>
    );
};

export default TodoForm;
