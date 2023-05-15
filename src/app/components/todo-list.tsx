import React, { memo, useCallback, useEffect } from 'react';
import { TodoListItem } from './todo-list-item';
import { TodoItem } from '../../intefaces';

export interface IToDoListProps {
    value?: TodoItem[];
}
const ToDoListComponent = (props: IToDoListProps) => {
  const { value = [] } = props;

  return <ul>
    {value.map((todo) => <TodoListItem key={todo._id} value={todo} />)}
  </ul>;
};

export const ToDoList = memo(
  ToDoListComponent,
);
