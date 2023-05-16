import { CreateRequestTodo } from "../../models/entities";
import { trpcClient } from "./trpc-client";
// import { trpcClient } from "./trpc-ws-client";

export const fetchAllTodos = async () => {
    const items = await trpcClient.todos.todoList.query();
    return items;
}

export const createTodo = async (payload: CreateRequestTodo) => {
    const newItem = await trpcClient.todos.addTodo.mutate(payload);
    return newItem;
}

export const fetchTodoById = async (id: string) => {
    const item = await trpcClient.todos.getTodo.query(id);
    return item;
}