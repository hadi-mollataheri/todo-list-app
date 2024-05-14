import { useState } from 'react';
import NewItems from './components/new-items/NewItem';
import TodoList from './components/todo-list/TodoList';

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
      <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
    </main>
  );
}

export default App;

