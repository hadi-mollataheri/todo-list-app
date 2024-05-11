import { useState } from 'react';
import NewItems from './components/NewItem';
import TodoList from './components/TodoList';

function App() {
  const [userInput, setUserInput] = useState('');
  return (
    <main className='App'>
      <NewItems userInput={userInput} setUserInput={setUserInput} />
      <TodoList />
    </main>
  );
}

export default App;

