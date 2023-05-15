"use client"; // This is a client component 👈🏽

import { createTodo, fetchAllTodos } from '../client-services/todo-service';
import { TodoItem } from '../intefaces';
import { TodoItemInput } from './components/todo-item-input';
import { ToDoList } from './components/todo-list'
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const loadTodos = useCallback(async () => {
    const response = await fetchAllTodos();
    setTodos(response ?? []);
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const handleSave = useCallback(async (newTodo: TodoItem) => {
    await createTodo({
      title: newTodo.title,
    });
    await loadTodos();
  }, [loadTodos]);

  return (
    <main>
      <ToDoList value={todos} />
      <TodoItemInput onSave={handleSave} />
    </main>
  )
}
