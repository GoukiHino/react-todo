import React, {useState} from "react";
import {Box, Container, Fab, Modal} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container component="main" maxWidth="sm">
            <TodoList/>
            <Fab color="primary" sx={{position: "absolute", bottom: 25, right: 25}} onClick={handleOpen}>
                <AddIcon/>
            </Fab>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 500,
                        bgcolor: "background.paper",
                        p: 3,
                        borderRadius: "5px"
                }}
                >
                    <TodoForm handleClose={handleClose}/>
                </Box>
            </Modal>
        </Container>
    );
};

export default TodoContainer;
