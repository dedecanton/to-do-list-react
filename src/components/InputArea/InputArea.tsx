import React, { KeyboardEvent, useState } from "react";
import * as C from "./InputArea.style";

type Props = {
  onAddTask: (text: string) => void;
};

const InputArea = ({ onAddTask }: Props) => {
  const [inputContent, setInputContent] = useState("");

  // const handleInputContent = (e:React.ChangeEvent<HTMLInputElement>) => {
  //     setInputContent(e.target.value)
  // }

  const handleSubmit = () => {
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
      <C.Button onClick={handleSubmit}>Adicionar</C.Button>
    </C.Container>
  );
};

export default InputArea;
