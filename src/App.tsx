import {Button, Col, List, Row} from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Title from './components/Title';
import Receipe from './components/Recipe';
import FormWrapper from './components/wrappers/FormWrapper';

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
    console.log(body);
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
    console.log(recipes);
  }

  const handleQueryRecipe = async (id: number) => {
    const response = await fetch( `${recipeURL}${id}/information?apiKey=${key}` );
    const body = await response.json();
    const recipeData = {
      instructions: body.instructions,
      image: body.image
    }
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
      {recipe ?
      <>
        <Row>
          <Button type="link" onClick={() => {setRecipe(undefined)}}>
            <LeftCircleOutlined />
          </Button>
        </Row>
          <Receipe instructions={recipe.instructions} image={recipe.image} />
      </> :
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <List
            dataSource={recipes}
            renderItem={(item:ResultProps, index) => (
              <List.Item>
                <Result image={item.image} id={item.id} title={item.title} onClick={() => handleQueryRecipe(item.id)}></Result>
              </List.Item>
            )} />
        </Col>
        <Col span={8}></Col>
      </Row>}
    </div>
  );
}
export default App;