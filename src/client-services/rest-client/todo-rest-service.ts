import { CreateRequestTodo, TodoItem } from "../../intefaces";

const BASE_URL = `/api/rest`;

export const fetchAllTodos = async () => {
    const response = await fetch(`${BASE_URL}/todos`);
    return await response.json() as TodoItem[];
}

export const createTodo = async (payload: CreateRequestTodo) => {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json() as TodoItem;
}