import React, { useState } from 'react';

const Todo = () => {

    const [ tarea, agregarTarea ] = useState('');

    return (
        <div className="container">
            <div className="row mt-3">

        <div className="col-12 card-principal d-flex"  style={{width: '35rem'}}>
            
        <ul className="list-group list-group-flush w-100">
             <input className="agregar-tarea list-group-item mb-1 w-100"
                 onSubmit={agregarTarea}
             />
            <li className="list-group-item">Lavar la ropa</li>
            <li className="list-group-item">Sacar al perro</li>
            <li className="list-group-item">Comprar ropa</li>
        </ul>
        </div>
        </div>
    </div>
    )
    
}


export default Todo;