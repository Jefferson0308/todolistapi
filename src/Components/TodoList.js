import Todo from '../Components/Todo'

function TodoList({ todos }) {
  return (
    <div className="allTasks">
      <ul>
        {todos.map(eachTask => {
          return <Todo key={eachTask.id} task={eachTask} />
        })}
      </ul>
    </div>
  )
}
export default TodoList
