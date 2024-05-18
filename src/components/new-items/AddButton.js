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
      <button onClick={handleAddButtonClick} className='flex justify-center items-center border border-sky-600 bg-sky-900/30 rounded mt-3 pt-1 pb-1.5 w-full h-full leading-none sm:w-auto sm:px-5 sm:pt-1 sm:pb-2 sm:leading-normal'>
        Add
      </button>
    </div>
  );
}

export default AddButton;
