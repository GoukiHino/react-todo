import React from "react";
import {Container} from "@mui/material";

import TodoList from "./TodoList";

const TodoContainer = () => {
    return (
        <Container component="main" maxWidth="xs">
            <TodoList/>
        </Container>
    );
};

export default TodoContainer;
