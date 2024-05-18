import { useState, useEffect } from 'react';
import NewItems from './components/new-items/NewItem';
import TodoList from './components/todo-list/TodoList';

function App() {
  const [userInput, setUserInput] = useState('');

  const savedTodoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
  const [todoItems, setTodoItems] = useState(savedTodoItems);

  const [checkedItems, setCheckedItems] = useState(
    new Array(todoItems.length).fill(false)
  );
  console.log(checkedItems);

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  useEffect(() => {
    const savedCheckedItems = localStorage.getItem('checkedItems')
      ? JSON.parse(localStorage.getItem('checkedItems'))
      : new Array(todoItems.length).fill(false);
    setCheckedItems(savedCheckedItems);
  }, [todoItems]);

  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]);

  return (
    <main className='text-white flex flex-col items-center min-h-80 w-full mt-7'>
      <div id='app' className='w-full px-3'>
        <NewItems
          userInput={userInput}
          setUserInput={setUserInput}
          setTodoItems={setTodoItems}
        />
        <TodoList
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      </div>
    </main>
  );
}

export default App;

