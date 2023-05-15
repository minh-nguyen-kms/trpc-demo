import React, { memo } from 'react';
import { TodoItem } from '../../intefaces';

export interface ITodoListItemProps {
    value: TodoItem;
}
const TodoListItemComponent = (props: ITodoListItemProps) => {
  const { value } = props;

  return <li>{value.title}</li>;
};

export const TodoListItem = memo(
  TodoListItemComponent,
);
