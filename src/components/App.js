

import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[text,setText]=useState("")

  function getValue(e){
    setText(e.target.value);
  }
  return (
    <div>
      <label>Enter your name:</label>
      <br></br>
        <input type="text" placeholder="" onChange={getValue}></input>
        <p>{text}</p>
    </div>
  )
}

export default App

