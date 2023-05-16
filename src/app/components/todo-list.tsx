import React, { memo, useCallback, useEffect } from 'react';
import { TodoListItem } from './todo-list-item';
import { TodoItem } from '../../models/entities';

export interface IToDoListProps {
    value?: TodoItem[];
    onItemClick?: (id: string) => void;
}
const ToDoListComponent = (props: IToDoListProps) => {
  const { value = [], onItemClick } = props;

  return <ul>
    {value.map((todo) => <TodoListItem 
      key={todo._id} 
      value={todo} 
      onClick={() => onItemClick?.(todo._id)} 
    />)}
  </ul>;
};

export const ToDoList = memo(
  ToDoListComponent,
);
