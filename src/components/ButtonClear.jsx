import styled from 'styled-components'
const ButtonClear = ({removeAllTasks}) => {
  return (
    <div>
        <Button onClick={ removeAllTasks}>Clear All Tasks</Button>
    </div>
  )
}

export default ButtonClear


const Button = styled.button`
border:none;
padding:10px 20px;
border-radius:5px;
margin:5px 140px;
font-family:inherit;
background:rgb(255, 127, 80);
color:white;
text-decoration:none;
cursor:pointer;
font-size:17px;
display:inline-block;
&:focus{
  outline:none;
}
&:active{
  transform: scale(0.98);
}
&:hover{
  background:rgb(0,255,127);
  transform: scale(1.2);
}`