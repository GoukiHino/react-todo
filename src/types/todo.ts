export type Todo = {
    id: string;
    title: string;
    description: string;
    due: Date | null;
    isDone: boolean;
}