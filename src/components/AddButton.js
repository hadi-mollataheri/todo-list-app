import React from 'react';

function AddButton({ setTodoItems, userInput }) {
  const handleAddButtonClick = () => {
    setTodoItems((prevItems) =>
      !prevItems.includes(userInput) && userInput
        ? [...prevItems, userInput]
        : [...prevItems]
    );
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
