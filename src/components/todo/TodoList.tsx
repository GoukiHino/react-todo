import React from "react";
import {useRecoilValue} from "recoil";
import {List} from "@mui/material";

import {todoListAtom} from "../../atoms/todoList";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoList = useRecoilValue(todoListAtom);
    return (
        <List>
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem}/>
            ))}
        </List>
    );
};

export default TodoList;
