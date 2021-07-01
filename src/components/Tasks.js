//rafce
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((singleTask) => (
        <Task
          key={singleTask.id}
          task={singleTask}
          onDelete={() => onDelete(singleTask.id)}
          onToggle={() => onToggle(singleTask.id)}
        />
      ))}
    </>
  );
};

export default Tasks;
