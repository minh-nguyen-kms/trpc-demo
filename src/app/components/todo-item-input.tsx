import React, { memo, useCallback, useState } from 'react';
import { TodoItem } from '../../models/entities';

export interface ITodoItemInputProps {
  value?: TodoItem;
  onChange?: (newValue: TodoItem) => void;
  onSave?: (newValue: TodoItem) => void;
}
const TodoItemInputComponent = (props: ITodoItemInputProps) => {
  const { value, onChange, onSave } = props;
  const [formValue, setFormValue] = useState(value ?? {
    _id: '',
    todoId: 0,
    title: '',
  });

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
  }, [formValue, onSave]);

  return <div>
    <input value={formValue.title} required onChange={handleTitleChange} />
    <button onClick={handleSave}>Save</button>
  </div>;
};

export const TodoItemInput = memo(
  TodoItemInputComponent,
);
