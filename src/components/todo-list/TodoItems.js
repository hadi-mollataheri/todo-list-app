import React from 'react';

function TodoItems({ todoItems, setTodoItems, checkedItems, setCheckedItems }) {
  const handleDeleteClick = (currentItem) => {
    setTodoItems((prevItems) => {
      return prevItems.filter((item) => {
        return item !== currentItem;
      });
    });
    // Remove the element(boolean elem) in the checkedItems when delete button is clicked with
    // checking if the current element in the todoItems is the same as the element that we clicked on
    // Use the *index* argument of the filter() to check that checks if todo item at the index is not the same as the
    // currentIndex that we are passing to the handleDeleteClick, if they are the same that means we clicked the delete button
    // so the element at this *index* in checkedItems(the _) should be filter out too like the actual item we filtered out above it
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = prevCheckedItems.filter(
        (_, index) => todoItems[index] !== currentItem
      );
      localStorage.setItem('checkedItems', JSON.stringify(newCheckedItems));
      return newCheckedItems;
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
  return (
    <div className='flex flex-col justify-center'>
      {todoItems.map((item, index) => {
        return (
          <div key={item} className='mx-3'>
            <label
              htmlFor={`todo-checkbox-${index}`}
              className={`${
                checkedItems[index] ? 'opacity-65' : 'opacity-100'
              }`}
            >
              <input
                id={`todo-checkbox-${index}`}
                type='checkbox'
                checked={checkedItems[index]}
                onChange={() => handleCheckChange(index)}
                className='mb-4 mr-1'
              ></input>
              {item}
            </label>
            <button
              onClick={() => handleDeleteClick(item)}
              className='ml-3 border rounded-sm border-red-400 text-sm px-1 text-red-500 bg-red-400/10 h-full pb-1 pt-0.5 leading-none'
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoItems;
