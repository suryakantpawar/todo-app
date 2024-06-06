import { useState } from "react";
import "./App.css";
import TodoList from "./pages/TodoList";
import TodoForm from "./pages/TodoForm";
import NavBar from "./components/NavBar";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <NavBar />
      <TodoForm setTodoList={setTodoList} />
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} />
      ) : (
        <p style={{ textAlign: "center", fontSize: "150%" }}>No Items</p>
      )}
    </>
  );
}

export default App;
