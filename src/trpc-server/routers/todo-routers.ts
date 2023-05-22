import { publicProcedure, router } from "../trpc";
import { observable } from '@trpc/server/observable';
import { EventEmitter } from 'events';
import { createToDoItem, deleteTodoById, queryAllTodos, queryTodoById, queryTodoByTodoId } from "../../server/services/todo-service";
import { CreateRequestTodoSchema } from "../../models/schemas";
import { z } from "zod";
import { TodoItem } from "../../models/entities";

// create a global event emitter (could be replaced by redis, etc)
const ee = new EventEmitter();

export const todoRouters = router({
    // todoList: publicProcedure.query(async () => {
    //     const todos = await queryAllTodos();
    //     return todos;
    //     }),
    // addTodo: publicProcedure
    //     .input(CreateRequestTodoSchema)
    //     .mutation(async ({ input }) => {
    //         const newTodo = await createToDoItem(input);
    //         ee.emit('onTodoChanged', newTodo);
    //         return newTodo;
    //     }),
    // getTodo: publicProcedure
    //     .input(z.string())
    //     .query(async ({ input }) => {
    //         const todo = await queryTodoById(input);
    //         return todo;
    //     }),
    // // getTodo: publicProcedure
    // //     .input(z.number())
    // //     .query(async ({ input }) => {
    // //         const todo = await queryTodoByTodoId(input);
    // //         return todo;
    // //     }),

    // deleteTodo: publicProcedure
    //     .input(z.string())
    //     .mutation(async ({ input }) => {
    //         await deleteTodoById(input);
    //         ee.emit('onTodoChanged', { deletedId: input });
    //         return { deletedId: input };
    //     }),

    // onTodoChanged: publicProcedure.subscription(() => {
    //     // return an `observable` with a callback which is triggered immediately
    //     return observable<TodoItem | { deletedId: string }>((emit) => {
    //         const onAdd = (data: TodoItem | { deletedId: string }) => {
    //             // emit data to client
    //             emit.next(data);
    //         };
    //         // trigger `onAdd()` when `add` is triggered in our event emitter
    //         ee.on('onTodoChanged', onAdd);
    //         // unsubscribe function when client disconnects or stops subscribing
    //         return () => {
    //             ee.off('onTodoChanged', onAdd);
    //         };
    //     });
    // }),
    
})