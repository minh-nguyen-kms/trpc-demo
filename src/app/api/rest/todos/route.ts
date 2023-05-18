import { NextResponse } from "next/server";
import { createToDoItem, queryAllTodos } from "../../../../server/services/todo-service";
import { CreateRequestTodo } from "../../../../models/entities";


export async function GET(request: Request) {
    const items = await queryAllTodos();
    return NextResponse.json(items);
}

export async function POST(request: Request ) {
    const payload = await request.json() as CreateRequestTodo;
    const newItem = await createToDoItem(payload);
    return NextResponse.json(newItem);
}