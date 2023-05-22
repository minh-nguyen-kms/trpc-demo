import React, { memo, use, useCallback, useEffect, useState } from 'react';
import { TodoItem } from '../../models/entities';
import { fetchTodoById } from '../../client-services/todo-service';
import { Card, CardContent, CardHeader, Container, Typography } from '@mui/material';

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

  return <Container>
    <Card>
      <CardContent>
        <Typography variant="h5">{todo?.title}</Typography>
        <pre>{JSON.stringify(todo, null, 2)}</pre>
      </CardContent>
    </Card>
  </Container>;
};

export const ToDoItemDetail = memo(
  ToDoItemDetailComponent,
);
