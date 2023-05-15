import { CreateRequestTodo } from "../../intefaces";
import { trpcClient } from "./trpc-ws-client";
// import { trpcClient } from "./trpc-client";

export const fetchAllTodos = async () => {
    const items = await trpcClient.todos.todoList.query();
    return items;
}

export const createTodo = async (payload: CreateRequestTodo) => {
    const newItem = await trpcClient.todos.addTodo.mutate(payload);
    return newItem;
}