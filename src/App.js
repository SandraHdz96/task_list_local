import { TaskCreator } from "./componentes/TaskCreator";
import "./App.css";
import { useState, useEffect } from "react";
import { TaskTable } from "./componentes/TaskTable";
import { VisibilityControl } from "./componentes/VisibilityControl";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName, taskDescription) {
    if (tasksItems.find((task) => task.title === taskName)) {
      alert("Esa tarea ya existe");
    } else {
      setTasksItems([
        ...tasksItems,
        {
          title: taskName,
          description: taskDescription,
          done: false,
        },
      ]);
    }
  }

  function cleanTask() {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.title == task.title ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");

    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container col-md-4 offset-md-4 p-4">
        <TaskCreator createNewTask={createNewTask}></TaskCreator>
        <TaskTable tasks={tasksItems} toggleTask={toggleTask}></TaskTable>

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
        ></VisibilityControl>

        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={true}
          ></TaskTable>
        )}
      </div>
    </main>
  );
}

export default App;
