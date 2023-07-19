import {atom} from "recoil";

import {Todo} from "../types/todo";

export const todoListAtom = atom<Todo[]>({
    key: "todoList",
    default: []
});
