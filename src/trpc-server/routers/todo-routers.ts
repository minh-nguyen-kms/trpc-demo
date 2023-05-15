import { publicProcedure, router } from "../trpc";
import { CreateRequestTodoSchema } from "../../intefaces";
import { createToDoItem, queryAllTodos } from "../../server/services/todo-service";

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
})