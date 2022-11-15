import React from "react";
import { v4 as uuid } from "uuid";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  function inputTextHandler(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuid() }]); //uuid4
    setInputText("");
  }
  function statusHandler(e) {
    console.log(e.target.value);
    setStatus(e.target.value);
  }

  return (
    <form>
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
      ></input>
      <button>
        <i className="fas fa-plus-square" onClick={submitTodoHandler}></i>
      </button>
      <div className="select">
        <select
          name="todos"
          id=""
          className="filter-todo"
          onClick={statusHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
