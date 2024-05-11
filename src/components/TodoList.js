import React from 'react';
import TodoItems from './TodoItems';
import DeleteButton from './DeleteButton';

function TodoList() {
  return (
    <div>
      <TodoItems />
      <DeleteButton />
    </div>
  );
}

export default TodoList;
