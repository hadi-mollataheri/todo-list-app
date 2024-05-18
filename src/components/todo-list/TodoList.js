import React from 'react';
import TodoItems from './TodoItems';

function TodoList({ todoItems, setTodoItems, checkedItems, setCheckedItems }) {
  return (
    <div className='self-start my-5'>
      <h2 className='font-bold text-lg mb-2'>Todo List</h2>
      <TodoItems
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
    </div>
  );
}

export default TodoList;
