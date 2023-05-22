"use client"; // This is a client component 👈🏽

import { useRouter } from 'next/navigation';
import { createTodo, deleteTodo, fetchAllTodos } from '../client-services/todo-service';
import { TodoItem } from '../models/entities';
import { TodoItemInput } from './components/todo-item-input';
import { ToDoList } from './components/todo-list'
import { useCallback, useEffect, useState } from 'react';
import { Container, Stack } from '@mui/material';
// import { subscribeTodoOnChanged } from '../client-services/trpc-client/todo-trpc-service';

export default function Home() {
  const router = useRouter();
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const loadTodos = useCallback(async () => {
    const response = await fetchAllTodos();
    setTodos(response ?? []);
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  // useEffect(() => {
  //   const unsubscribe = subscribeTodoOnChanged((changedItem) => {
  //     const deletedItem = changedItem as { deletedId: string };
  //     if (deletedItem.deletedId) {
  //       console.log('[tRPC Subscription] Todo deleted:', deletedItem.deletedId);
  //       setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== deletedItem.deletedId));
  //       return;
  //     } else {
  //       const newTodo = changedItem as TodoItem;
  //       console.log('[tRPC Subscription] New Todo added:', newTodo);
  //       setTodos((prevTodos) => [...prevTodos, newTodo]);
  //     }
  //   });
  //   return () => {
  //     unsubscribe.unsubscribe();
  //   }
  // }, []);

  const handleItemClick = useCallback((id: string) => {
    const nextRoute = `/todo/${id}`;
    router.push(nextRoute);
  }, [router]);

  const handleSave = useCallback(async (newTodo: TodoItem) => {
    await createTodo({
      title: newTodo.title,
      todoId: new Date().getTime(),
    });
    await loadTodos();
  }, [loadTodos]);

  const handleDelete = useCallback(async (id: string) => {
    await deleteTodo(id);
    await loadTodos();
  }, [loadTodos]);

  return (
      <Container>
        <Stack spacing={2} direction="column">
          <TodoItemInput onSave={handleSave} />
          <ToDoList value={todos} onItemClick={handleItemClick} onItemDelete={handleDelete} />
        </Stack>
      </Container>
  )
}
