import { Button } from '@mui/material'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'

function Todo({ task }) {
  function deleteTask(e) {
    e.currentTarget.parentElement.remove()
  }
  function taskDone(e) {
    e.currentTarget.classList.toggle('done')
  }
  return (
    <li onClick={taskDone}>
      {task.title}
      <Button onClick={deleteTask}>
        <DeleteForeverTwoToneIcon sx={{ color: 'red' }} />
      </Button>
    </li>
  )
}
export default Todo
