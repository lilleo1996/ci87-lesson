import { useState } from "react";

import Todo from "../Todo";

const TodoList = () => {
  const [todos, setTodos] = useState(["homework", "shopping"]);

  const addTodo = () => {
    setTodos((prev) => {
      return [...prev, "new todo item"];
    });
  };

  //   const todosLi = [];
  //   todos.forEach((item) => {
  //     todosLi.push(<li>{item}</li>); // todosLi = [<li>{todos[0]}</li>, <li>{todos[1]}</li>]
  //   });

  //   const renderTodo = (item) => {
  //     return (
  //       <li className="todo-list-item">
  //         <span>{item}</span>
  //       </li>
  //     );
  //   };

  return (
    <div className="todo-list">
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((item) => (
          <Todo item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
