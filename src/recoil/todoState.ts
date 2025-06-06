import {atom} from "recoil";
import type {Todo} from "../types/todo";

export const todoListState = atom<Todo[]>({
    key: "todoListState",
    default: [],
});