import React from 'react';
import Input from './Input';
import AddButton from './AddButton';

function NewItems({ userInput, setUserInput }) {
  return (
    <div>
      <Input userInput={userInput} setUserInput={setUserInput} />
      <AddButton />
    </div>
  );
}

export default NewItems;
