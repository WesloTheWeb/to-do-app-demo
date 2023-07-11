import { useState } from 'react';
import CreateTask from './components/CreateTask/CreateTask';
import './App.scss';
import Tasks from './containers/Tasks/Tasks';
import CompletedTasks from './containers/CompletedTasks/CompletedTasks';
import TaskModel from './interfaces/task.model';

function App() {
  const [activeTasks, setActiveTasks] = useState<TaskModel[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskModel[]>([]);

  const todoAddHandler = (text: string, due?: Date) => {
    setActiveTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.random().toString(),
        title: text,
        due: due
      }]);
  };

  const deleteATask = (id: string) => {
    setActiveTasks(activeTasks.filter(task => task.id !== id))
  };

  const handleComplete = (id: string) => {
    const taskIndex = activeTasks.findIndex(task => task.id === id);

    if (taskIndex > -1) {
      const newActiveTasks = [...activeTasks];
      const completedTask = { ...newActiveTasks[taskIndex], completed: true };

      newActiveTasks.splice(taskIndex, 1);
      setActiveTasks(newActiveTasks);
      setCompletedTasks(prevTasks => [...prevTasks, completedTask]);
    }
  };

  return (
    <>
      <section className="header">
        <h1>To-Do List Demo</h1>
        <sub>Built with <a href='https://vitejs.dev/'>Vite</a></sub>
      </section>
      <div>
        <CreateTask addTodo={todoAddHandler} />
      </div>
      <Tasks
        items={activeTasks.map(task => ({ ...task, completed: false }))}
        onDelete={deleteATask}
        onComplete={handleComplete}
      />
      <CompletedTasks
        items={completedTasks.map(task => ({ ...task, completed: true }))}
        onDelete={deleteATask}
      />
    </>
  );
};

export default App;