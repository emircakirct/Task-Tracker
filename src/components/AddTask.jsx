import {useState} from 'react'
import styled from 'styled-components'


const AddTask = ({handleAddNewTask}) => {
const [text,setText] = useState("")
const [date,setDate] = useState("")

const submit = (e) => {
  e.preventDefault()
  handleAddNewTask({text,date,isDone:false})
  setText("")
  setDate("")
}

const textChange = (e) => {
  setText(e.target.value)
}

const dateChange = (e) => {
  setDate(e.target.value)
}


return(
  <Form onSubmit={submit}>
    <MainForm>
    <Label>Task</Label>
    <Input type='text' placeholder='Add a Task' onChange={textChange}></Input>
    </MainForm>
    <MainForm>
      <Label>Day & Time</Label>
      <Input type='text' placeholder='Add DayTime' onChange={dateChange}></Input>
    </MainForm>
    <Button type='submit'>Save</Button>
  </Form>
)
}
export default AddTask


const Button = styled.button`
display: block;
width: 100%;
height:50px;
background-color:purple;
color:white;
`

const Form = styled.form`
margin-bottom: 40px;
`

const MainForm = styled.div`
margin: 20px 0;
`

const Label = styled.label`
display: block;
`

const Input = styled.input`
width: 100%;
height: 40px;
margin: 5px;
padding: 3px 7px;
font-size: 17px;`