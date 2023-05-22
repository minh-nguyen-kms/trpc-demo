import React, { memo, useCallback, useEffect } from 'react';
import { TodoListItem } from './todo-list-item';
import { TodoItem } from '../../models/entities';
import { Card, List } from '@mui/material';

export interface IToDoListProps {
    value?: TodoItem[];
    onItemClick?: (id: string) => void;
    onItemDelete?: (id: string) => void;
}
const ToDoListComponent = (props: IToDoListProps) => {
  const { value = [], onItemClick } = props;

  return <Card>
    <List>
      {value.map((todo) => <TodoListItem 
        key={todo._id} 
        value={todo} 
        onClick={() => onItemClick?.(todo._id)} 
        onDelete={() => props.onItemDelete?.(todo._id)}
      />)}
    </List>
  </Card>;
};

export const ToDoList = memo(
  ToDoListComponent,
);
