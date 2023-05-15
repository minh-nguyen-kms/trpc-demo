import { z } from "zod";


/**
 * Define the schema with typescript for rest APIs
 */

// export type TodoItem = {
//   _id: string
//   title: string
// }
// export type CreateRequestTodo = {
//   title: string
// }
// export type UpdateRequestTodo = TodoItem;








/**
 * Define the schema with zod for tRPC
 */

export const CreateRequestTodoSchema = z.object({
  title: z.string()
});
export type CreateRequestTodo = z.infer<typeof CreateRequestTodoSchema>;

export const TodoItemSchema = z.object({
  _id: z.string(),
  title: z.string(),
  isDone: z.boolean().optional(),
});
export type TodoItem = z.infer<typeof TodoItemSchema>;

export const UpdateRequestTodoSchema = TodoItemSchema;
export type UpdateRequestTodo = TodoItem;