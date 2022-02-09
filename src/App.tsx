import React, { useState } from "react";

// Types
import { ListItemType } from "./types/ListItem.type";

// Components
import Header from "./components/Header";
import InputArea from "./components/InputArea";

function App() {
  // States
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<ListItemType[]>([])

  // Handlers
  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleAddTask = (text: string) => {
    const newTask = {
      name: text,
      done: false,
      id: Math.random(),
    };

    setTaskList((prevTasks) =>[ ...prevTasks, newTask])
    setTimeout(() => {console.log(taskList)}, 500)
    
  };

  return (
    <>
      <Header isDark={isDarkTheme} changeTheme={handleThemeChange} />
      <InputArea onAddTask={handleAddTask} />
    </>
  );
}

export default App;
