import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd"
import { useState } from "react";

type FormProps = {
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>
}

const Form: React.VFC<FormProps> = ({setIngredients}) => {
  const [textInput, setTextInput] =useState('')

  const handleAddItem = () => {
    if(!textInput || !textInput.trim()) return;
    setIngredients((prev) => {
      return [...prev, textInput];
    });
    setTextInput('')
  };

  return(
    <Row>
      <Col span={8} offset={8}>
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
              <Button type={'primary'} onClick={(e) => { e.preventDefault(); handleAddItem()}}>
                <CheckOutlined />
              </Button>
            </Col>
          </Row> 
        </form>
      </Col>
    </Row>
  )
}

export default Form