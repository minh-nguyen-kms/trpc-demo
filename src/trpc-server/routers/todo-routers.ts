import { publicProcedure, router } from "../trpc";
import { observable } from '@trpc/server/observable';
import { EventEmitter } from 'events';
import { createToDoItem, queryAllTodos, queryTodoById, queryTodoByTodoId } from "../../server/services/todo-service";
import { CreateRequestTodoSchema } from "../../models/schemas";
import { z } from "zod";
import { TodoItem } from "../../models/entities";

// create a global event emitter (could be replaced by redis, etc)
const ee = new EventEmitter();

export const todoRouters = router({
    todoList: publicProcedure.query(async () => {
        const todos = await queryAllTodos();
        return todos;
        }),
    addTodo: publicProcedure
        .input(CreateRequestTodoSchema)
        .mutation(async ({ input }) => {
            const newTodo = await createToDoItem(input);
            ee.emit('onTodoAdded', newTodo);
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

    onTodoAdded: publicProcedure.subscription(() => {
        // return an `observable` with a callback which is triggered immediately
        return observable<TodoItem>((emit) => {
            const onAdd = (data: TodoItem) => {
                // emit data to client
                emit.next(data);
            };
            // trigger `onAdd()` when `add` is triggered in our event emitter
            ee.on('onTodoAdded', onAdd);
            // unsubscribe function when client disconnects or stops subscribing
            return () => {
                ee.off('onTodoAdded', onAdd);
            };
        });
    }),
})