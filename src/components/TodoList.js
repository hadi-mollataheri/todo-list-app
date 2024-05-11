import React from 'react';
import TodoItems from './TodoItems';
import DeleteButton from './DeleteButton';

function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      <TodoItems />
      <DeleteButton />
    </div>
  );
}

export default TodoList;
