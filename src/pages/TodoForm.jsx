import React, { useState } from "react";
import classes from "./TodoForm.module.css";

function TodoForm({ setTodoList }) {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodoList((prevValue) => {
      console.log(prevValue.length);
      return [
        ...prevValue,
        { key: prevValue.length + 1, title: value, status: false },
      ];
    });
    setValue("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        className={classes.formInput}
        name="todoItem"
        value={value}
        onChange={changeHandler}
      />
      <button className={classes.formButton} type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
