export function VisibilityControl({ setShowCompleted, cleanTask, isChecked }) {
  function handleDelete() {
    if (window.confirm("Seguro de querer eliminarlo?")) {
      cleanTask();
    }
  }

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Mostrar tareas hechas</label>
      </div>
      <button className="btn btn-danger btn-sm " onClick={handleDelete}>
          Clear
      </button>
    </div>
  );
}
