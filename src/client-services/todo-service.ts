
import { CreateRequestTodo, TodoItem } from "../intefaces";
// import * as service from "./rest/todo-rest-service";
import * as service from "./trpc-client/todo-trpc-service";


export const fetchAllTodos = async (): Promise<TodoItem[]> => {
    return service.fetchAllTodos();
}

export const createTodo = async (payload: CreateRequestTodo): Promise<TodoItem> => {
    return service.createTodo(payload);
}