"use client";// This is a client component 👈🏽
import { ToDoItemDetail } from "../../components/todo-item-detail";

export default function Page({ params }: { params: { id: string } }) {
  console.log('params', params);
  return <ToDoItemDetail id={params.id} />;
}