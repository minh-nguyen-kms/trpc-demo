export type TodoItem = {
  _id: string;
  todoId: number;
  title: string;
}
export type CreateRequestTodo = {
  title: string;
  todoId: number;
}
export type UpdateRequestTodo = TodoItem;










// import { z } from "zod";
// import { CreateRequestTodoSchema, TodoItemSchema } from "./schemas";

// export type CreateRequestTodo = z.infer<typeof CreateRequestTodoSchema>;
// export type TodoItem = z.infer<typeof TodoItemSchema>;
// export type UpdateRequestTodo = TodoItem;



