import { TextField, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import TodoList from '../Components/TodoList'

function Main() {
  const [input, setInput] = useState('')
  const [task, setTask] = useState([])

  const api = 'https://jsonplaceholder.typicode.com/todos'

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => setTask(data))
  }, [])

  function addTask(e) {
    const nextId = task.length + 1
    e.preventDefault()
    let allTasks = [...task]
    allTasks = [...allTasks, { id: nextId, title: input }]
    setTask(allTasks)
    setInput('')
  }

  function deleteAllTasks() {
    const li = document.querySelectorAll('ul li')
    for (let i = 0; i < li.length; i++) {
      li[i].remove()
    }
  }

  return (
    <>
      <main>
        <form>
          <TextField
            fullwidth="true"
            label="Type Task here..."
            size="small"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <Button onClick={addTask} variant="contained">
            Add Task
          </Button>
        </form>
      </main>
      <Button onClick={deleteAllTasks}>Delete All Tasks</Button>
      <TodoList todos={task} />
    </>
  )
}
export default Main
