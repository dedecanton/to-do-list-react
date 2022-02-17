import React, { KeyboardEvent, useState } from "react";
import * as C from "./InputArea.style";
import Button from "../UI/Button";

type Props = {
  onAddTask: (text: string) => void;
};

const InputArea = ({ onAddTask }: Props) => {
  const [inputContent, setInputContent] = useState("");

  const styleButton = `
  width: 10rem;
  margin: 0.5rem;
  padding: 1rem;

  @media(min-width: 980px){
    width:20rem;
    margin-left: 1rem
  }
  `;

  const handleSubmit = () => {
    if (!(inputContent.trim().length > 0)) return;

    onAddTask(inputContent);
    setInputContent("");
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === "Enter" && inputContent.trim().length > 0) {
      onAddTask(inputContent);
      setInputContent("");
    }
  };

  return (
    <C.Container>
      <C.Input
        type="text"
        placeholder="Descrição da tarefa..."
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
        onKeyPress={handleKeyUp}
      />
      <Button
        aditionalStyles={styleButton}
        onClick={handleSubmit}
        text="Adicionar"
      />
    </C.Container>
  );
};

export default InputArea;
