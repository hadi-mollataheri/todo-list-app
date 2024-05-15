import React from 'react';

function TodoItems({ todoItems, setTodoItems, checkedItems, setCheckedItems }) {
  const handleDeleteClick = (currentItem) => {
    setTodoItems((prevItems) => {
      return prevItems.filter((item) => {
        return item !== currentItem;
      });
    });
  };
  // When the checkboxes are checked
  const handleCheckChange = (currentIndex) => {
    // Create a new checkedItems array state value with previous boolean elements
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = [...prevCheckedItems];
      // Update this newly created array at the current index with the opposite of their previous same boolean value state
      newCheckedItems[currentIndex] = !newCheckedItems[currentIndex];
      return newCheckedItems;
    });
  };
  return todoItems.map((item, index) => {
    return (
      <div key={index}>
        <label
          htmlFor={`todo-checkbox-${index}`}
          className={`${checkedItems[index] ? 'opacity-65' : 'opacity-100'}`}
        >
          <input
            id={`todo-checkbox-${index}`}
            type='checkbox'
            onChange={() => handleCheckChange(index)}
          ></input>
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
