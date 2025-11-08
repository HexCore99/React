import { useState } from "react";

const initialTaskList = [];

function App() {
  const [taskList, setTaskList] = useState(initialTaskList);
  const completedTask = taskList.filter((task) => task.completed).length;
  function handleAddNewTask(t) {
    const newTask = { id: Date.now(), taskName: t, completed: false };
    setTaskList((prev) => [...prev, newTask]);
  }

  function handleRemoveTask(task) {
    setTaskList((prev) => prev.filter((t) => t.id !== task.id));
  }

  function handleCheckBox(task) {
    setTaskList((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  return (
    <div className="container">
      <ProgressBar completedTask={completedTask} totalTask={taskList.length} />
      <AddNewTask onHandleAddNewTask={handleAddNewTask} />
      <TaskList
        taskList={taskList}
        onhandleRemoveTask={handleRemoveTask}
        onHandleCheckBox={handleCheckBox}
      />
    </div>
  );
}

function ProgressBar({ completedTask, totalTask }) {
  return (
    <div className="progress-bar">
      <h2>ToDo List</h2>
      <label>
        {completedTask} of {totalTask} Completed
      </label>
    </div>
  );
}
function AddNewTask({ onHandleAddNewTask }) {
  const [addTask, setAddTask] = useState("");

  function handleAddTask(e) {
    e.preventDefault();

    if (!addTask) return;
    onHandleAddNewTask(addTask);
    setAddTask("");
  }
  return (
    <form className="add-new-task" onSubmit={handleAddTask}>
      <input
        className="task-name"
        type="text"
        placeholder="Add a new task..."
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      ></input>
      <span>
        <button>+ Add</button>
      </span>
    </form>
  );
}
function TaskList({ taskList, onhandleRemoveTask, onHandleCheckBox }) {
  return (
    <div className="task-list">
      {taskList.length === 0 && <p>No tasks yet. Add one above!</p>}
      {taskList.map((task) => (
        <Task
          task={task}
          onHandleRemoveTask={onhandleRemoveTask}
          onHandleCheckBox={onHandleCheckBox}
          key={task.id}
        />
      ))}
    </div>
  );
}
function Task({ task, onHandleRemoveTask, onHandleCheckBox }) {
  function handleRemoveTask() {
    onHandleRemoveTask(task);
  }

  function handleCheckBox() {
    onHandleCheckBox(task);
  }
  return (
    <div className="task">
      <div className="box-and-task">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckBox}
        />
        <label className={task.completed ? "strikethrough" : ""}>
          {task.taskName}
        </label>
      </div>
      <button onClick={handleRemoveTask}>❌</button>
    </div>
  );
}

export default App;
