import {useState} from "react";
import "./App.css";

import Select from "./Select/Select";
import Button from "./Button/Button";
import TextField from "./TextField/TextField";
import TextArea from "./TextArea/TextArea";
import Card from "./Card/Card";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");

  const innerComponent = 
  <div>
  <h1>Form</h1>
    <TextField 
      value={firstName} 
      onChange={(event)=>setFirstName(event.target.value)}
      label="First Name"
      placeHolder="Enter first name..."
    >
    </TextField>
    <TextField 
      value={lastName} 
      onChange={(event)=>setLastName(event.target.value)}
      label="Last Name"
      placeHolder="Enter last name..."
    >
    </TextField>
    <Select 
      value="Sex"
      options={["male","female","Other"]}
    >
    </Select>
    <TextArea value={comment} onChange = {(event)=>setComment(event.target.value)}></TextArea>
    <Button name="Done" onClick={()=>console.log("Form Submitted")}></Button>
  </div>
  
  return (
    <div className="App">
      <Card innerComponent = {innerComponent}></Card>
    </div>
  );
}

export default App;
