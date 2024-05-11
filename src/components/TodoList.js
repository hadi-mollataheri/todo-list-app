import React from 'react';
import TodoItems from './TodoItems';
import DeleteButton from './DeleteButton';

function TodoList({todoItems}) {
  return (
    <div>
      <h2>Todo List</h2>
      <TodoItems todoItems={todoItems} />
      <DeleteButton />
    </div>
  );
}

export default TodoList;
