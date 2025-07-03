import React from "react";
import { Todo } from "../types";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      className={`todo-item ${todo.done ? "done" : ""}`}
    >
      {todo.text}
    </div>
  );
};

export default TodoItem;
