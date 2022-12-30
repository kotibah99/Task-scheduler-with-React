import { useState } from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header'
import AddTask from './components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors ",
      "day": "May 8th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": " at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
  ])
  //ADD TASK 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }
  //Delete Task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task => task.id !== id)))
  }
  //Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No task To show'}
    </div>
  );
}

export default App;
