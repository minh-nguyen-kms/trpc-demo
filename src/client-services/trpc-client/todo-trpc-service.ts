import { CreateRequestTodo, TodoItem } from "../../models/entities";
import { trpcClient } from "./trpc-client";
// import { trpcClient } from "./trpc-ws-client";

const todoClient = trpcClient.todos;

export const fetchAllTodos = async () => {
    const items = await todoClient.todoList.query();
    return items;
}

export const createTodo = async (payload: {
    title: string;
    todoId: number;
}) => {
    const newItem = await todoClient.addTodo.mutate(payload);
    return newItem;
}

export const fetchTodoById = async (id: string) => {
    const item = await todoClient.getTodo.query(id);
    return item;
}

export const subscribeTodoOnAdded = (onData: (item: TodoItem) => void) => {
    return todoClient.onTodoAdded.subscribe(undefined, {
        onData
    });
}
