import { Button, Col, List, Row, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import React, { FC, useState } from 'react';
import './App.css';
import Form from './Form';

const apiCall = async function () {
    return 'foo';
}

const App: FC = () => {
  const [recipe, setRecipe] = useState('');

  const [ingredients, setIngredients] = useState<string[]>([])
  console.log('ingredients', ingredients)

  return (
    <div className="App">
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
         <Form setIngredients={setIngredients} />
        <List
        dataSource={ingredients}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>{item}</Typography.Text>
            <CloseCircleOutlined />
          </List.Item>
        )} />
        <Button 
          type="primary" 
          onClick={async function () {
            const text = await apiCall();
            setRecipe(text);
          }}
        >Call API
        </Button>
      </Col>
      <Col span={8}></Col>
    </Row>
    </div>
  );
}
export default App;

//apiKey=04200ff3a93c4098be792a5e56cad4ef

//https://api.spoonacular.com/recipes/findByIngredients
//?apiKey=04200ff3a93c4098be792a5e56cad4ef
//&ingredients="ground beef"