import React from "react";
import TodoItem from "../components/TodoItem";
import classes from "./TodoList.module.css";

function TodoList(props) {
  return (
    <div className={classes.todoList}>
      {props.todoList.map((item) => (
        <TodoItem key={item.key} item={item} />
      ))}
    </div>
  );
}

export default TodoList;
