import React from 'react';
import TodoItems from './TodoItems';

function TodoList({ todoItems, setTodoItems, checkedItems, setCheckedItems }) {
  return (
    <div>
      <h2 className='font-bold'>Todo List</h2>
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
