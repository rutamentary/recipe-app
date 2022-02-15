import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const apiCall = async function () {
    return 'foo';
}

function App() {
  const [recipe, setRecipe] = useState('');
  return (
    <div className="App">
      <button onClick={async function () {
          const text = await apiCall();
          setRecipe(text);
      }}>Call Api</button>

        <p>{recipe}</p>
    </div>
  );
}

export default App;
