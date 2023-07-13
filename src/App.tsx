import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState(["This is simeple Todo Data"]);
  const [countTask, setCountTask] = useState(todo.length);
  const [countTaskFinish, setCountTaskFinish] = useState(0);
  const [countTaskabort, setCountTaskabort] = useState(0);

  const handleOnchangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
    console.log(todoInput);
  };

  const resettodoInput = () => {
    setTodoInput("");
  };

  const addTodo = () => {
    if (todoInput != "") {
      setTodo((prevTodo) => [...prevTodo, todoInput]);
      setCountTask(todo.length + 1);
      setTodoInput("");
    } else {
      alert("Please Enter A Todo");
    }
  };

  const finish = (index: number) => {
    setTodo((prevTodo) => prevTodo.filter((_, i) => i !== index));
    setCountTask(todo.length - 1);
    setCountTaskFinish(countTaskFinish + 1);
    console.log(countTask);
  };

  const deleteTodo = (index: number) => {
    setTodo((prevTodo) => prevTodo.filter((_, i) => i !== index));
    setCountTask(todo.length - 1);
    setCountTaskabort(countTaskabort + 1);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="topic">
          <h1 className="text-topic">Todo App</h1>
        </div>
        <div className="searchbox">
          <input
            name="todoInput"
            onChange={handleOnchangeTodo}
            className="inputTodo"
            type="text"
            value={todoInput}
            placeholder="Insert Todo List Here"
          ></input>
          <button className="Submit" onClick={addTodo}>
            Submit
          </button>
          <button className="Reset" onClick={resettodoInput}>
            Reset
          </button>
        </div>
        <div className="validation-box">
          <h2 className="task">Your Task left {countTask}</h2>
          <h2 className="task-finish">Task Finish {countTaskFinish}</h2>
          <h2 className="task-abort">Task Abort {countTaskabort}</h2>
        </div>
        {todo.map((v, k) => (
          <div key={k} className="card">
            <h2 className="card-topic">{v}</h2>
            <hr></hr>
            <div className="buttongroup">
              <button className="finish" onClick={() => finish(k)}>
                ✔
              </button>
              <button className="abort" onClick={() => deleteTodo(k)}>
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
