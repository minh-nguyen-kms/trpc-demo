import { CreateRequestTodo, TodoItem } from "../../models/entities";

const BASE_URL = `/api/rest`;

export const fetchAllTodos = async () => {
    const response = await fetch(`${BASE_URL}/todos`);
    return await response.json() as TodoItem[];
}

export const createTodo = async (payload: {
    title: string;
    todoId: number;
}) => {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json() as TodoItem;
}

export const fetchTodoById = async (id: string) => {
    const response = await fetch(`${BASE_URL}/todos/${id}`);
    return await response.json() as TodoItem;
}

export const deleteTodo = async (id: string) => {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: 'DELETE'
    });
    return await response.json() as { deletedId: string };
}