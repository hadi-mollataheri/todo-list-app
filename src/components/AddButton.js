import React from 'react';

function AddButton({ setTodoItems, userInput }) {
  const handleAddButtonClick = () => {
    setTodoItems((prevItems) => [...prevItems, userInput]);
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
