import { useState } from 'react';
import CreateTask from './components/CreateTask/CreateTask';
import './App.scss';
import Tasks from './containers/Tasks/Tasks';
import TaskModel from './interfaces/task.model';

function App() {
  const [activeTasks, setActiveTasks] = useState<TaskModel[]>([]);

  const todoAddHandler = (text: string, due?: Date) => {
    setActiveTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.random().toString(),
        title: text,
        due: due
      }])
  };

  const deleteATask = (id: string) => {
    // Mouse click select id from activeTasks array.
    // const findId = activeTasks.findIndex(id => activeTasks.id)
    // filter activeTasks so return a new activeTasks array on anything that is not a match of id.
    setActiveTasks(activeTasks.filter(task => task.id !== id))
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
      <Tasks items={activeTasks} onDelete={deleteATask} />
    </>
  );
};

export default App;