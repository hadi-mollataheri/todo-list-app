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
        className='border border-black block text-black'
      ></input>
    </div>
  );
}

export default Input;
