import { useState } from "react";

export function TaskCreator({ createNewTask }) {
  //Guarda lo que recibe el input
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  //Manejador del evento Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName, newTaskDescription);
    setNewTaskName("");
    setNewTaskDescription("");
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9 mb-1">
          <input
            type="text"
            placeholder="Ingresa tu tarea"
            value={newTaskName}
            onChange={(e) => {
              setNewTaskName(e.target.value);
            }}
            className="form-control"
          ></input>
        </div>
        <div className="col-9">
        <textarea
        className="form-control"
        placeholder="Descripcion"
        value={newTaskDescription}
        onChange={(e) => {
          setNewTaskDescription(e.target.value);
        }}
      ></textarea>
        </div>
        
        <div className="col-3">
        <button className="btn btn-primary btn-sm">Registrar</button>
        </div>
      </form>
    </div>
  );
}
