import { NextResponse } from "next/server";
import { deleteTodoById, queryTodoById, queryTodoByTodoId } from "../../../../../server/services/todo-service";

type NextParams = {
    params: {
        id: string;
    }
}

export async function GET(request: Request, { params }: NextParams) {
    const itemId = params.id;
    const item = await queryTodoById(itemId);
    return NextResponse.json(item);
}



// export async function GET(request: Request, { params }: NextParams) {
//     const itemId = parseInt(params.id, 10);
//     const item = await queryTodoByTodoId(itemId);
//     return NextResponse.json(item);
// }

export async function DELETE(request: Request, { params }: NextParams) {
    const itemId = params.id;
    await deleteTodoById(itemId);
    return NextResponse.json({ deletedId: itemId });
}