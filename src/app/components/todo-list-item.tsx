import React, { memo } from 'react';
import { TodoItem } from '../../models/entities';

export interface ITodoListItemProps {
    value: TodoItem;
    onClick?: () => void;
}
const TodoListItemComponent = (props: ITodoListItemProps) => {
  const { value, onClick } = props;

  return <li onClick={onClick}>{value.title}</li>;
};

export const TodoListItem = memo(
  TodoListItemComponent,
);
