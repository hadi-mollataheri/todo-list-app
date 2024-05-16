import React from 'react';

function AddButton({ setTodoItems, userInput }) {
  const handleAddButtonClick = () => {
    setTodoItems((prevItems) =>
      !prevItems.includes(userInput) && userInput
        ? [...prevItems, userInput]
        : [...prevItems]
    );
  };
  // If we want it to localStorage immediately update after adding a item we would do this but it's not necessary:
  /* setTodoItems((prevItems) => {
      const updatedItems =
        !prevItems.includes(userInput) && userInput
          ? [...prevItems, userInput]
          : [...prevItems];
      localStorage.setItem('todoItems', JSON.stringify(updatedItems));
      return updatedItems;
    });*/
  return (
    <div>
      <button onClick={handleAddButtonClick} className='border border-black'>
        Add
      </button>
    </div>
  );
}

export default AddButton;
