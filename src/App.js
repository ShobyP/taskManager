import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctors appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Xmas",
      day: "Dec 25th at 7:10pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Mechanic",
      day: "Mar 11th at 1:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Code",
      day: "Feb 10th at 12:30pm",
      reminder: true,
    },
  ]);

  // show add task
  const showAddTaskForm = () => {
    setShowAddTask(!showAddTask);
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const taskWithId = { id, ...task };
    setTasks([...tasks, taskWithId]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title={"Task Tracker"} onClick={showAddTaskForm} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
