import { useState } from 'react';
import CreateTask from './components/CreateTask/CreateTask';
import './App.scss';
import Tasks from './containers/Tasks/Tasks';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="header">
        <h1>To-Do List Demo</h1>
        <sub>Built with <a href='https://vitejs.dev/'>Vite</a></sub>
      </section>
      <div>
        <CreateTask />
      </div>
       <Tasks />
    </>
  )
}

export default App;