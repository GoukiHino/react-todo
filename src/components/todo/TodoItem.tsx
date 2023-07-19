import React from "react";
import {Checkbox, IconButton, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import {Todo} from "../../types/todo";

type Props = {
    item: Todo;
}

const TodoItem = ({item}: Props) => {
    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox checked={item.isCompleted}/>
            </ListItemIcon>
            <ListItemText primary={item.title} secondary={item.description} />
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
