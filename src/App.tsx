import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import RecipeWrapper from './components/wrappers/RecipeWrapper';
import FormWrapper from './components/wrappers/FormWrapper';
import ResultsWrapper from './components/wrappers/ResultsWrapper';

const recipeIdeasURL = 'https://api.spoonacular.com/recipes/findByIngredients';
const recipeURL = 'https://api.spoonacular.com/recipes/';

export interface ResultProps {
  id: number,
  image: string,
  title: string,
}

export interface RecipeProps {
  instructions: string,
  image: string,
}

const App: React.VFC = () => {
  const [recipes, setRecipes] =useState<ResultProps[]>([]);
  const [recipe, setRecipe] =useState<RecipeProps>();
  const [ingredients, setIngredients] = useState<string[]>([])
  const key = process.env.REACT_APP_KEY;

  const handleQueryRecipes = async () => {
    const list = ingredients.join(",");
    const response = await fetch( `${recipeIdeasURL}?apiKey=${key}&ingredients="${list}"` );
    const body = await response.json();
    for(let i = 0; i < body.length; i++){
      const obj = {
        id: body[i].id,
        image: body[i].image,
        title: body[i].title
      }
      setRecipes((prev) => {
        return [...prev, obj];
      });
    }
  }

  const handleQueryRecipe = async (id: number) => {
    const response = await fetch( `${recipeURL}${id}/information?apiKey=${key}` );
    const body = await response.json();
    const recipeData = {
      instructions: body.instructions,
      image: body.image
    }
    console.log(body);
    setRecipe(recipeData);
  }

  const removeIngredients = (index: number) => {
    setIngredients( (ingredients)  => {
      ingredients.splice(index, 1);
      return [...ingredients];
    });
  };

  return (
    <div className="App">
      <Title />
      <FormWrapper ingredients={ingredients} setIngredients={setIngredients} removeIngredients={removeIngredients} handleQueryRecipes={handleQueryRecipes} />
      { recipe ? 
        <RecipeWrapper recipe={recipe} handleSetRecipe={setRecipe} />
        :
        <ResultsWrapper recipes={recipes} handleQueryRecipe={handleQueryRecipe}></ResultsWrapper>
      }
    </div>
  );
}
export default App;