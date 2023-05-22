
import { CreateRequestTodo, TodoItem } from "../models/entities";
import * as service from "./rest-client/todo-rest-service";
// import * as service from "./trpc-client/todo-trpc-service";


export const fetchAllTodos = async (): Promise<TodoItem[]> => {
    return service.fetchAllTodos();
}

export const fetchTodoById = async (id: string): Promise<TodoItem> => {
    return service.fetchTodoById(id);
}

export const createTodo = async (payload: {
    title: string;
    todoId: number;
}): Promise<TodoItem> => {
    return service.createTodo(payload);
}

export const deleteTodo = async (id: string): Promise<{ deletedId: string }> => {
    return service.deleteTodo(id);
}

// export const subscribeTodoOnAdded = (onData: (item: TodoItem) => void) => {
//     return service.subscribeTodoOnAdded(onData);
// }