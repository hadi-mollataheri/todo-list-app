import { useState } from 'react';
import NewItems from './components/NewItem';
import TodoList from './components/TodoList';

function App() {
  const [userInput, setUserInput] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  return (
    <main className='App'>
      <NewItems
        userInput={userInput}
        setUserInput={setUserInput}
        setTodoItems={setTodoItems}
      />
      <TodoList todoItems={todoItems} />
    </main>
  );
}

export default App;

