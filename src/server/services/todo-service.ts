import { CreateRequestTodo, TodoItem } from "../../intefaces";
import { openCollection } from "../storage/storage";


export const queryAllTodos = async (): Promise<TodoItem[]> => {
    const todoCollection = await openCollection();
    const items = await todoCollection.find().toArray();
    // convert document to TodoItem
    return items.map((item) => {
        return {
            _id: item._id.toString(),
            title: item.title
        };
    });
};

export const createToDoItem = async (payload: CreateRequestTodo): Promise<TodoItem> => {
    const todoCollection = await openCollection();
    const newItem = await todoCollection.insertOne(payload);
    return {
        _id: newItem.insertedId.toString(),
        title: payload.title
    };
}