import { Button, Input } from "antd"
import { useRef, useState } from "react";

type FormProps = {
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>
}

const Form: React.VFC<FormProps> = ({setIngredients}) => {
  const [textInput, setTextInput] =useState('')

  const handleAdd = (event:  any) => {
    setIngredients((prev) => {
      console.log(prev);
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
    <Input 
      value={textInput}
      onChange={(e) => {setTextInput(e.target.value)}}
      onPressEnter={handleAdd}
      />
  </form>)
}

export default Form