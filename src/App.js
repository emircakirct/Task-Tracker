import {useState} from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import styled from 'styled-components';
import ButtonClear from './components/ButtonClear';
import './App.css'


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Design a prototype",
      date: "Jan 9th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Draft Copy",
      date: "Jan 11th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Survey Users",
      date: "Jan 14th at 3:00pm",
      isDone: false,
    },
  ])

  const [showAddTask, setShowAddTask] = useState(false);


  const handleAddNewTask = (newTask) => {
    // if (taskName && !tasks.includes(taskName.toLowerCase())) {
      let NewObject = {id: tasks.length + 1, ...newTask }
   
      setTasks([...tasks,NewObject])
 
  }





  const removeTask = (id) => {
    const newData = tasks.filter(taskObject => taskObject.id !== id)
    setTasks(newData)
  }
  

  const toggleDone = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, isDone: !task.isDone} : task))
  }

  const toggleShow = () => setShowAddTask(!showAddTask)


  const removeAllTasks = () => setTasks([])


  return (
    <Container>
     <Header 
     showAddTask={showAddTask}
     toggleShow={toggleShow}
     />

     {showAddTask && <AddTask handleAddNewTask={handleAddNewTask} />}

     {tasks.length > 0 ? (
       <Tasks tasks = {tasks} removeTask={removeTask} toggleDone={toggleDone} removeAllTasks={removeAllTasks} />
     ) : (
       <NoTask>NO TASKS TO SHOW</NoTask>
     )}
     <ButtonClear removeAllTasks={removeAllTasks}/>
    </Container>
  );
}
export default App


const NoTask = styled.h3`
text-align:center`

const Container = styled.div`
width: 500px;
margin: 30px auto;
min-height: 400px;
padding: 35px;
overflow: auto;
border-radius: 10px;
background-image: linear-gradient(
  to bottom right,
  rgb(204, 90, 140),
  rgb(231, 90, 213)
);`


