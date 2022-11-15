import React from "react";
import Todo from "./Todo";
function Todolist({ todos, setTodos, filteredStatus }) {
  //console.log(todos)
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredStatus.map((todo) => (
            <Todo
              text={todo.text}
              key={todo.id}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
