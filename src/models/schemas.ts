import { z } from "zod";

export const CreateRequestTodoSchema = z.object({
  todoId: z.number(),
  title: z.string(),
});

export const TodoItemSchema = z.object({
    _id: z.string(),
    todoId: z.number(),
    title: z.string(),
    isDone: z.boolean().optional(),
});

export const UpdateRequestTodoSchema = TodoItemSchema;