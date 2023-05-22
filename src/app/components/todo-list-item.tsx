import React, { memo } from 'react';
import { TodoItem } from '../../models/entities';
import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export interface ITodoListItemProps {
    value: TodoItem;
    onClick?: () => void;
    onDelete?: () => void;
}
const TodoListItemComponent = (props: ITodoListItemProps) => {
  const { value, onClick, onDelete } = props;

  return <ListItem key={value._id} onClick={onClick}
    secondaryAction={
      <IconButton edge="end" aria-label="delete" onClick={(e) => {
        e.stopPropagation();
        onDelete?.();
      }}>
        <DeleteIcon />
      </IconButton>
    }
  >
    <ListItemButton>
      <ListItemText primary={value.title} />
    </ListItemButton>
  </ListItem>;
};

export const TodoListItem = memo(
  TodoListItemComponent,
);
