import {Button, Col, List, Result, Row, Typography} from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { FC, useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';

const recipeIdeasURL = 'https://api.spoonacular.com/recipes/findByIngredients';
const recipeURL = 'https://api.spoonacular.com/recipes/';

interface ResultProps {
  id: number,
  image: string,
  title: string
}

const App: FC = () => {
  const [recipes, setRecipes] =useState<ResultProps[]>([]);
  const [recipe, setRecipe] =useState<string>('');
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
    setRecipe(body.instructions);
  }

  const removeIngredients = (index: number) => {
    setIngredients( (ingredients)  => {
      ingredients.splice(index, 1);
      return [...ingredients];
    });
  };

  return (
    <div className="App">
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <h3>What's for dinner?</h3>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Form setIngredients={setIngredients} />
          <List
            dataSource={ingredients}
            renderItem={(item, index) => (
            <List.Item>
              <Typography.Text mark>{item}</Typography.Text>
              <CloseCircleOutlined onClick={() => removeIngredients(index)} />
            </List.Item>
          )} />
          <Button 
            type="primary" 
            onClick={handleQueryRecipes}
          > Call API
          </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
      {recipe ? <Row><Button onClick={() => {setRecipe('')}}>Back</Button> {recipe}</Row> :
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <List
            dataSource={recipes}
            renderItem={(item:ResultProps, index) => (
              <List.Item>
                <Results image={item.image} id={item.id} title={item.title} onClick={() => handleQueryRecipe(item.id)}></Results>
              </List.Item>
            )} />
        </Col>
        <Col span={8}></Col>
      </Row>}
    </div>
  );
}
export default App;