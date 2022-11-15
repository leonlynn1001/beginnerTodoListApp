import { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredStatus, setFilteredStatus] = useState([]);
  useEffect(filterdTaskHandler, [todos, status]);
  function filterdTaskHandler() {
    switch (status) {
      case "completed":
        setFilteredStatus(todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilteredStatus(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredStatus(todos);
    }
  }

  //saving in localStorage
  function saveInLocalStorage() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="headerText">Rita's Todo List</h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filteredStatus={filteredStatus}
      />
    </div>
  );
}

export default App;
