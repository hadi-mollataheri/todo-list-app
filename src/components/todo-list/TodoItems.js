import React from 'react';

function TodoItems({ todoItems, setTodoItems, checkedItems, setCheckedItems }) {
  const handleDeleteClick = (currentItem) => {
    setTodoItems((prevItems) => {
      return prevItems.filter((item) => {
        return item !== currentItem;
      });
    });
  };

  return todoItems.map((item, index) => {
    return (
      <div key={index}>
        <label htmlFor={`todo-checkbox-${index}`}>
          <input id={`todo-checkbox-${index}`} type='checkbox'></input>
          {item}
        </label>
        <button
          onClick={() => handleDeleteClick(item)}
          className='ml-3 border border-black text-sm px-1 text-red-500'
        >
          Delete
        </button>
      </div>
    );
  });
}

export default TodoItems;
