import { publicProcedure, router } from "../trpc";
import { createToDoItem, queryAllTodos, queryTodoById, queryTodoByTodoId } from "../../server/services/todo-service";
import { CreateRequestTodoSchema } from "../../models/schemas";
import { z } from "zod";

export const todoRouters = router({
    todoList: publicProcedure.query(async () => {
        const todos = await queryAllTodos();
        return todos;
        }),
    addTodo: publicProcedure
        .input(CreateRequestTodoSchema)
        .mutation(async ({ input }) => {
            const newTodo = await createToDoItem(input);
            return newTodo;
        }),
    getTodo: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const todo = await queryTodoById(input);
            return todo;
        }),
    // getTodo: publicProcedure
    //     .input(z.number())
    //     .query(async ({ input }) => {
    //         const todo = await queryTodoByTodoId(input);
    //         return todo;
    //     }),
})