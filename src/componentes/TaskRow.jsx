export function TaskRow({ task, toggleTask }) {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
}
