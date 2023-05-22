import { CreateRequestTodo, TodoItem } from "../../models/entities";
import { trpcClient } from "./trpc-client";
// import { trpcClient } from "./trpc-ws-client";

const todoClient = trpcClient.todos;

// export const fetchAllTodos = async () => {
//     const items = await todoClient.todoList.query();
//     return items;
// }

// export const createTodo = async (payload: {
//     title: string;
//     todoId: number;
// }) => {
//     const newItem = await todoClient.addTodo.mutate(payload);
//     return newItem;
// }

// export const fetchTodoById = async (id: string) => {
//     const item = await todoClient.getTodo.query(id);
//     return item;
// }

// export const deleteTodo = async (id: string) => {
//     return await todoClient.deleteTodo.mutate(id);
// }

// // export const subscribeTodoOnChanged = (onData: (item: TodoItem | { deletedId: string }) => void) => {
// //     return todoClient.onTodoChanged.subscribe(undefined, {
// //         onData
// //     });
// // }
