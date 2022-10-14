import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState} from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 02:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 01:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 6th at 02:30pm',
        reminder: false
    },
])

  // Delete task

  const deleteTask = (id)=> {
    setTasks(tasks.filter(task=> task.id != id))
  }
  return (
    <div className='container'>
      <Header />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <p> No tasks to show</p>}
    </div>
  )
}


export default App
