import React from 'react';
import Input from './Input';
import AddButton from './AddButton';

function NewItems({ userInput, setUserInput, setTodoItems }) {
  return (
    <div id='new-items' className='flex flex-col justify-center'>
      <Input userInput={userInput} setUserInput={setUserInput} />
      <AddButton userInput={userInput} setTodoItems={setTodoItems} />
    </div>
  );
}

export default NewItems;
