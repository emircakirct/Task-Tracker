import Task from './Task'

const Tasks = ({tasks,removeTask,toggleDone}) => {
  return (
    <div>
      {tasks.map((task)=>(
        
      <Task key={task.id} task={task} removeTask={removeTask} toggleDone={toggleDone} />
      ))}
    </div>
  )
}

export default Tasks
