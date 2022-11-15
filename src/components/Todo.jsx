import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  //function for btn
  function deleteHandler(e) {
    console.log(e);
    setTodos(todos.filter((item) => item.id !== todo.id));
  }
  function checkHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={checkHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
