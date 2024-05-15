import { useState } from 'react';
import NewItems from './components/new-items/NewItem';
import TodoList from './components/todo-list/TodoList';

function App() {
  const [userInput, setUserInput] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  // Create a checkedItems array state for every todoItems elements with the initial value of false
  const [checkedItems, setCheckedItems] = useState(
    new Array(todoItems.length).fill(false)
  );
            console.log(checkedItems);
            console.log(checkedItems.length);

  return (
    <main className='App'>
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
    </main>
  );
}

export default App;

