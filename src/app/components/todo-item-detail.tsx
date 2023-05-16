import React, { memo, use, useCallback, useEffect, useState } from 'react';
import { TodoItem } from '../../models/entities';
import { fetchTodoById } from '../../client-services/todo-service';

export interface IToDoItemDetailProps {
  id: string;
}
const ToDoItemDetailComponent = (props: IToDoItemDetailProps) => {
  const { id } = props;
  const [todo, setTodo] = useState<TodoItem | null>();

  const loadTodo = useCallback(async () => {
    const response = await fetchTodoById(id);
    setTodo(response ?? null);
    }, [id]);

  useEffect(() => {
    loadTodo();
  }, [loadTodo]);

  return <>
    <h2>{todo?.title}</h2>
    <pre>{JSON.stringify(todo, null, 2)}</pre>
  </>;
};

export const ToDoItemDetail = memo(
  ToDoItemDetailComponent,
);
