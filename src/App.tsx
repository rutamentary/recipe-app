import React, {useState, FC} from 'react';
import './App.css';
import { Button } from 'antd';
import { useForm } from "react-hook-form";

const apiCall = async function () {
    return 'foo';
}

const App: FC = () => {
  const [recipe, setRecipe] = useState('');
  return (
    <div className="App">
      <Button 
        type="primary" 
        onClick={async function () {
          const text = await apiCall();
          setRecipe(text);
        }}
      >Call API
      </Button>
        <p>{recipe}</p>
    </div>
  );
}
export default App;

//apiKey=04200ff3a93c4098be792a5e56cad4ef

//https://api.spoonacular.com/recipes/findByIngredients
//?apiKey=04200ff3a93c4098be792a5e56cad4ef
//&ingredients="ground beef"