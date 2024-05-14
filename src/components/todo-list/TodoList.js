import React from 'react';
import TodoItems from './TodoItems';

function TodoList({todoItems, setTodoItems}) {
  return (
    <div>
      <h2 className='font-bold'>Todo List</h2>
      <TodoItems todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
}

export default TodoList;
