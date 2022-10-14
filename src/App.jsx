import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask  from './components/AddTask'
import { useState, useEffect } from 'react'


function App() {
  const [showAddTask, setShowAddTask ] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(()=> {
    const getTasks = async ()=> {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])
  // fetch tasks 
  const fetchTasks =async ()=> {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task)=> {
    
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    }) 

    const data = await res.json()

    setTasks([...tasks, data])
    // const id = tasks.length + 1
    // const newTask = { id, ...task }
    // setTasks([ ...tasks, newTask])
  }

  // Delete task

  const deleteTask = async (id)=> {
    await fetch(`http://localhost:5000/tasks/${id}` , {
      method: 'DELETE'
    })
    setTasks(tasks.filter(task=> task.id != id))
  }

  // toggle reminder

  const toggleReminder = (id)=>{
    setTasks(tasks.map(task=> task.id == id ? {...task, reminder: !task.reminder} : task ))
  }


  // toggle show add task form
  const toggleForm = ()=> {
    setShowAddTask(prev=> !prev)
  }
  return (
    <div className='container'>
      <Header buttonTitle={showAddTask} show={toggleForm}/>

      {showAddTask && <AddTask onAdd={addTask}/>}

      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggle={toggleReminder}/> : <p> No tasks to show</p>}
    </div>
  )
}


export default App
