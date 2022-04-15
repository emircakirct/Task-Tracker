import styled from 'styled-components'


const Button = ({ toggleShow, color, text,}) => {
  return (
    <div>
      <ButtonStyle style ={{backgroundColor : color}} onClick={toggleShow}>
        {text}
      </ButtonStyle>
    </div>
  );
};

export default Button;



const ButtonStyle = styled.button`
display: inline-block;
background: rgb(109, 14, 138);
color: #white;
border: none;
padding: 10px 20px;
margin: 5px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
font-size: 15px;
font-family: inherit;
&:focus{
  outline: none;
}
&:active{
  transform: scale(0.98);
}
`

