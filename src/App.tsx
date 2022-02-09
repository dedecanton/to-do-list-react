import React, { useEffect, useState } from "react";

// Types
import { ListItemType } from "./types/ListItem.type";

// Components
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import ListArea from "./components/ListArea";
import InfoArea from "./components/InfoArea";

function App() {
  // States
  const [taskList, setTaskList] = useState<ListItemType[]>([]);

  useEffect(() => {
    const dataLocalStorage = localStorage.getItem("listTask");
    if (dataLocalStorage !== null) {
      const data = JSON.parse(dataLocalStorage);
      setTaskList(data);
    }
  }, []);
  
  // LocalStorage Management
  const updateLocalStorage = () => {
    localStorage.setItem("listTask", JSON.stringify(taskList));
  };
  useEffect(updateLocalStorage, [taskList]);

  // Handlers
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

  const handleRemoveTask = (id: string) => {
    let newList = [...taskList];
    const index = newList.findIndex((item) => item.id === id);
    newList.splice(index, 1);
    setTaskList(newList);
  };

  // App
  return (
    <>
      <Header/>
      <InputArea onAddTask={handleAddTask} />
      <InfoArea taskList={taskList} />
      <ListArea
        onTaskRemove={handleRemoveTask}
        onTaskChange={handleChangeTask}
        taskList={taskList}
      />
    </>
  );
}

export default App;
