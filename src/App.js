import {useState} from "react";

import Select from "./Select/Select";
import Button from "./Button/Button";
import TextField from "./TextField/TextField";
import TextArea from "./TextArea/TextArea";

function App() {
  const [value, setValue] = useState("");
  const l = ["male","female","None"];
  
  return (
    <div className="App">
      <TextField 
        value={value} 
        onChange={(event)=>setValue(event.target.value)}
        label="First Name"
        placeHolder="Enter first name..."
      >
      </TextField>
      <TextField 
        value={value} 
        onChange={(event)=>setValue(event.target.value)}
        label="Last Name"
        placeHolder="Enter last name..."
      >
      </TextField>
      <Select name="Sex" options={l}></Select>
      <TextArea></TextArea>
      <Button name="Done"></Button>
    </div>
  );
}

export default App;
