import logo from './logo.svg';
import { useGlobalContext } from './store/context/context';
import './App.css';

function App() {

  const { state, handleAddItem } = useGlobalContext();

  return (
    <div className="App">
      <button onClick={(e) => handleAddItem(e, 'Item 1', 'new')}>Item-1</button>
      <button onClick={(e) => handleAddItem(e, 'Item 2', 'new')}>Item-2</button>
      <button onClick={(e) => handleAddItem(e, 'Item 3', 'new')}>Item-3</button>
    </div>
  );
}

export default App;
