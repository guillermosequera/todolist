import React, { Fragment } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './componentes/Todo.jsx';


function App() {
  return (
    <Fragment>
    <h1>todos</h1>

    <div className="container">
    <div className="row">
      <div className="mx-auto shadow-lg mb-5 bg-white rounded">
        <Todo />
      </div> 
    </div>
    
    </div>
    </Fragment>
  );
}

export default App;
