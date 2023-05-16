
import { CreateRequestTodo, TodoItem } from "../models/entities";
// import * as service from "./rest-client/todo-rest-service";
import * as service from "./trpc-client/todo-trpc-service";


export const fetchAllTodos = async (): Promise<TodoItem[]> => {
    return service.fetchAllTodos();
}

export const fetchTodoById = async (id: string): Promise<TodoItem> => {
    return service.fetchTodoById(id);
}

export const createTodo = async (payload: CreateRequestTodo): Promise<TodoItem> => {
    return service.createTodo(payload);
}