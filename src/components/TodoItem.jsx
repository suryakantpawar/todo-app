import React, { useState } from "react";
import classes from "./TodoItem.module.css";

function TodoItem({ item }) {
  const [color, setColor] = useState("red");

  return (
    <div className={classes.todoItem} style={{ backgroundColor: color }}>
      <input
        className={classes.checkbox}
        type="checkbox"
        defaultChecked={item.status}
        onClick={() =>
          setColor((prevColor) => (prevColor == "red" ? "green" : "red"))
        }
      />
      <h5>{item.title}</h5>
    </div>
  );
}

export default TodoItem;
