import React from 'react';

function AddButton({ setTodoItems, userInput }) {
  const handleAddButtonClick = () => {
    setTodoItems((prevItems) => {
      const updatedItems =
        !prevItems.includes(userInput) && userInput
          ? [...prevItems, userInput]
          : [...prevItems];
      localStorage.setItem('todoItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  return (
    <div>
      <button onClick={handleAddButtonClick} className='border border-black'>
        Add
      </button>
    </div>
  );
}

export default AddButton;
