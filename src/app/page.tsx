"use client"; // This is a client component 👈🏽

import { useRouter } from 'next/navigation';
import { createTodo, fetchAllTodos } from '../client-services/todo-service';
import { TodoItem } from '../models/entities';
import { TodoItemInput } from './components/todo-item-input';
import { ToDoList } from './components/todo-list'
import { useCallback, useEffect, useState } from 'react';

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

  const handleItemClick = useCallback((id: string) => {
    const nextRoute = `/todo/${id}`;
    console.log('nextRoute', nextRoute);
    router.push(nextRoute);
  }, [router]);

  const handleSave = useCallback(async (newTodo: TodoItem) => {
    await createTodo({
      title: newTodo.title,
      todoId: new Date().getTime(),
    });
    await loadTodos();
  }, [loadTodos]);

  return (
    <main>
      <ToDoList value={todos} onItemClick={handleItemClick} />
      <TodoItemInput onSave={handleSave} />
    </main>
  )
}
