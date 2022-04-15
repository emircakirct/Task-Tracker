import Button from "./Button";
import styled from "styled-components";

const Header = ({toggleShow, showAddTask }) => {
 
  return (
    <HeaderStyle>
      <Title>TASK TRACKER</Title>
      <Button 
      toggleShow = {toggleShow}
      color = {showAddTask ? 'aqua' : 'yellow'}
      text= {showAddTask ? "Show Add Task Bar" : "Close Add Task Bar"}/>
    </HeaderStyle>
  );
};

export default Header;



const Title = styled.h1`
color:#ADFF2F`

const HeaderStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px;
`