import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {
  fetchTasks,
  deleteTask,
  addTask,
  updateReminder,
  getSingleTask,
} from "./Api";
import { useState, useEffect } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromDb = await fetchTasks();
      setTasks(tasksFromDb);
    };
    getTasks();
  }, []);

  // show add task
  const showAddTaskForm = () => {
    setShowAddTask(!showAddTask);
  };

  // Add Task
  const addTaskTrigger = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const taskWithId = { id, ...task };
    await addTask(taskWithId);
    setTasks([...tasks, taskWithId]);
  };

  // delete task
  const deleteTaskFunction = async (id) => {
    await deleteTask(id);
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
      <Header
        title={"Task Tracker"}
        onClick={showAddTaskForm}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTaskTrigger} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTaskFunction}
          onToggle={toggleReminder}
        />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
