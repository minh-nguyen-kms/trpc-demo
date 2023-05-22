import React, { memo, useCallback, useState } from 'react';
import { TodoItem } from '../../models/entities';
import { Button, Card, CardContent, Stack, TextField } from '@mui/material';
import Add from '@mui/icons-material/Add'
import { on } from 'events';

const EMPTY_TODO_ITEM: TodoItem = {
  _id: '',
  todoId: 0,
  title: '',
};

export interface ITodoItemInputProps {
  value?: TodoItem;
  onChange?: (newValue: TodoItem) => void;
  onSave?: (newValue: TodoItem) => void;
}
const TodoItemInputComponent = (props: ITodoItemInputProps) => {
  const { value, onChange, onSave } = props;
  const [formValue, setFormValue] = useState(value ?? EMPTY_TODO_ITEM);

  const handleTitleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setFormValue((prevValue) => { 
        const newFormValue = { ...prevValue, title: newTitle };
        onChange?.(newFormValue);
        return newFormValue;
    });
    
  }, [onChange]);

  const handleSave = useCallback(() => {
    onSave?.(formValue);
    // clear form
    setFormValue(EMPTY_TODO_ITEM);
    onChange?.(EMPTY_TODO_ITEM);
  }, [formValue, onChange, onSave]);

  return <Card>
    <CardContent>
      <Stack direction="row" gap={1} >
        <TextField value={formValue.title} required onChange={handleTitleChange} sx={{flexGrow: 1}} placeholder="Todo item" />
        <Button onClick={handleSave} variant="contained" startIcon={<Add />}>
          Add
        </Button>
      </Stack>
    </CardContent>
  </Card>;
};

export const TodoItemInput = memo(
  TodoItemInputComponent,
);
