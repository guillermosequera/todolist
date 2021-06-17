import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export function Todo({ todo, index, removeTodo }) {
  return (
    <div
      className="todo d-flex mb-1 p-1 justify-content-between" 
    >
      {todo.text}

      <div>
        <button onClick={() => removeTodo(index)} type="button" className="close" aria-label="Close">&times;</button>
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
        className="input w-100 border border-light mb-1"
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
    <div className="container" style={{background: "#F8D3D5"}}>
    <h1 className="text-danger"><em>todos</em></h1>
      <div className="todo-list m-auto card w-50 p-3" style={{background: "#F8D3D5"}}>
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
      <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "stretch",
                  justifyContent: "flex-end"
      }}>{todos.length} Left item</div>
      </div>
    </div>
  );
}

export default App;
