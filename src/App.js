import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => removeTodo(index)} type="button" className="close border-0 " aria-label="Close">&times;</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo}) {
  const [value, setvalue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  if (!value) return;
  addTodo(value);
  setvalue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        onChange={e => setvalue(e.target.value)}
      />
    </form>  )
}


function App() {

  const [todos, setTodos] = useState([
    {
      text: "Lavar la ropa",
      isCompleted: false
    },
    {
      text: "Hacer las tareas",
      isCompleted: false
    },
    {
      text: "Sacar al perro",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container card">
    <h1 className="text-danger"><em>todos</em></h1>
      <div className="todo-list m-auto">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
