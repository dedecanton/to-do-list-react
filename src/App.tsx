import React, { useState } from "react";

// Types
import { ListItemType } from "./types/ListItem.type";

// Components
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import ListArea from "./components/ListArea";

function App() {
  // States
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<ListItemType[]>([{id:'oi', name:'teste', done:false}]);

  // Handlers
  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleAddTask = (text: string) => {
    const newTask = {
      name: text,
      done: false,
      id: Math.random().toString(),
    };

    setTaskList((prevTasks) => [...prevTasks, newTask]);
  };

  const handleChangeTask = (id: string, done: boolean) => {
    let newList = [...taskList];
    newList.forEach((item) =>
      item.id === id ? (item.done = done) : item.done
    );
    setTaskList(newList);
  };

  const handleRemoveTask = (id:string) => {
    let newList = [...taskList]
    const index = newList.findIndex(item => item.id === id)
    newList.splice(index,1)
    setTaskList(newList)
  }

  // App
  return (
    <>
      <Header isDark={isDarkTheme} changeTheme={handleThemeChange} />
      <InputArea onAddTask={handleAddTask} />
      <ListArea onTaskRemove={handleRemoveTask} onTaskChange={handleChangeTask} taskList={taskList} />
    </>
  );
}

export default App;
