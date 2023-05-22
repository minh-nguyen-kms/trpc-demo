import { ObjectId } from "mongodb";
import { CreateRequestTodo, TodoItem } from "../../models/entities";
import { openCollection } from "../storage/storage";


export const queryAllTodos = async (): Promise<TodoItem[]> => {
    const todoCollection = await openCollection();
    const items = await todoCollection.find().toArray();
    // convert document to TodoItem
    return items.map((item) => {
        return {
            _id: item._id.toString(),
            todoId: item.todoId,
            title: item.title
        };
    });
};

export const queryTodoById = async (id: string): Promise<TodoItem> => {
    const todoCollection = await openCollection();
    const item = await todoCollection.findOne({ _id: new ObjectId(id) });
    if (!item) {
        throw new Error(`Todo with id ${id} not found`);
    }
    return {
        _id: item._id.toString(),
        todoId: item.todoId,
        title: item.title
    };
}

export const queryTodoByTodoId = async (todoId: number): Promise<TodoItem> => {
    const todoCollection = await openCollection();
    const item = await todoCollection.findOne({ todoId });
    if (!item) {
        throw new Error(`Todo with todoId ${todoId} not found`);
    }
    return {
        _id: item._id.toString(),
        todoId: item.todoId,
        title: item.title
    };
}


export const createToDoItem = async (payload: CreateRequestTodo): Promise<TodoItem> => {
    const todoCollection = await openCollection();
    const newItem = await todoCollection.insertOne(payload);
    return {
        _id: newItem.insertedId.toString(),
        todoId: payload.todoId,
        title: payload.title
    };
}

export const deleteTodoById = async (id: string): Promise<void> => {
    const todoCollection = await openCollection();
    await todoCollection.deleteOne({ _id: new ObjectId(id) });
}