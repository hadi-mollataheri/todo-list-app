import React from 'react';

function Input({ userInput, setUserInput }) {
  const handleInputChange = ({ target }) => {
    setUserInput(target.value);
  };
  return (
    <div>
      <label htmlFor='user-input'>New Item</label>
      <input
        id='user-input'
        onChange={handleInputChange}
        value={userInput}
        className='flex justify-center items-center border border-sky-800 bg-sky-600 rounded px-1 pt-1 pb-1.5 w-full h-full leading-none'
      ></input>
    </div>
  );
}

export default Input;
