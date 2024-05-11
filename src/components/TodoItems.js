import React from 'react';

function TodoItems({ todoItems }) {
  return todoItems.map((item, index) => {
    return (
      <div key={index}>
        <label htmlFor={`todo-checkbox-${index}`}>
          <input id={`todo-checkbox-${index}`} type='checkbox'></input>
          {item}
        </label>
      </div>
    );
  });
}

export default TodoItems;
