import { TaskRow } from "./TaskRow";
export function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  function taskTableRows(doneValue) {
    return(tasks
      .filter(task => task.done === doneValue)
      .map((task) => (
      <TaskRow task = {task}  key = {task.name} toggleTask = {toggleTask}></TaskRow>
    )))
  }

  return (
    <table className="table table-dark table-striped table-bordered border-secundary">
      <thead>
        <tr className="table-primary">
          <th>Tarea</th>
          <th>Descripcion</th>
          <th>Hecho</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}
