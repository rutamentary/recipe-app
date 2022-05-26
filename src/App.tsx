import { Button, Col, List, Row, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { FC, useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/ImageResult';

const recipeIdeasURL = 'https://api.spoonacular.com/recipes/findByIngredients';
const recipeURL = 'https://api.spoonacular.com/recipes/';

const App: FC = () => {
  const [recipes, setRecipes] =useState<string[]>([]);
  const [recipe, setRecipe] =useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([])
  const key = process.env.REACT_APP_KEY;

  const handleQueryRecipes = async () => {
    const list = ingredients.join(",");
    const response = await fetch( `${recipeIdeasURL}?apiKey=${key}&ingredients="${list}"` );
    const body = await response.json();
    console.log(body);
    setRecipes(body);
  }

  const handleQueryRecipe = async (id: number) => {
    const list = ingredients.join(",");
    const response = await fetch( `${recipeURL}${id}/information?apiKey=${key}"` );
    const body = await response.json();
    console.log(body);
    setRecipes(body);
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
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <List
            dataSource={recipes}
            renderItem={(item, index) => (
              <List.Item>
                <Result image={item}></Result>
              </List.Item>
            )} />
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}
export default App;