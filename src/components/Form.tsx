import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd"
import { useState } from "react";

type FormProps = {
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>
}

const Form: React.VFC<FormProps> = ({setIngredients}) => {
  const [textInput, setTextInput] =useState('')

  const handleAddItem = () => {
    setIngredients((prev) => {
      return [...prev, textInput];
    });
    setTextInput('')
  };

  return(
    <form 
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Row>
        <Col span={23}>
          <Input 
          value={textInput}
          onChange={(e) => {setTextInput(e.target.value)}}
          onPressEnter={handleAddItem}
        />
        </Col>
        <Col span={1}>
          <Button onClick={handleAddItem}>
            <CheckOutlined />
          </Button>
        </Col>
      </Row> 
    </form>
  )
}

export default Form