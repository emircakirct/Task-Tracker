import {BsFillBagXFill} from "react-icons/bs";
import styled, {css} from 'styled-components'
const Task = ({task,removeTask,toggleDone}) => {
  return (
<TaskStyle isDone={task.isDone} onClick={() => toggleDone(task.id)}>
        <Cursor>{task.text} <BsFillBagXFill style={{color:"red", cursor:"pointer"}}
      onClick={()=> removeTask(task.id)}/></Cursor>
      <p>{task.date}</p>
    </TaskStyle>
  );
};

export default Task;

const TaskStyle = styled.div`
background: white;
cursor: pointer;
margin: 10px;
padding: 10px 20px;
border-left: ${task => task.isDone ? "10px solid black" : ""};
text-decoration: ${task => task.isDone ? "line-through" : ""}`

 const Cursor = styled.h3`
 display: flex;
 justify-content: space-between;
 align-items: center;`



 


 



