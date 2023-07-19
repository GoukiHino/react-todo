import React from "react";
import {useRecoilState} from "recoil";
import {Checkbox, IconButton, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import {Todo} from "../../types/todo";
import {todoListAtom} from "../../atoms/todoList";

type Props = {
    item: Todo;
}

const TodoItem = ({item}: Props) => {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);

    const handleToggleCompleted = (id: number, isCompleted: boolean) => {
        setTodoList(
            todoList.map((todoItem) => {
                if (todoItem.id === id) {
                    return {...todoItem, isCompleted};
                }
                return todoItem;
            })
        );
    };

    const handleDelete = (id: number) => {
        setTodoList(
            todoList.filter((todoItem) => todoItem.id !== id)
        );
    };

    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox
                    checked={item.isCompleted}
                    onChange={() => handleToggleCompleted(item.id, !item.isCompleted)}
                />
            </ListItemIcon>
            <ListItemText primary={item.title} secondary={item.description}/>
            <IconButton onClick={() => handleDelete(item.id)}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
