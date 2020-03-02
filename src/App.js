import React, { Component } from 'react';
import './App.css'
import { FileInputReact } from "./components/FileInputReact";

export class App extends Component {

  fileChangeHandler=(file)=>{
    console.log(file);
  }

  submitHandler=()=>{
    console.log('submit');
  }

  render() {
    return (
      <div className="App">
        <FileInputReact
          button="Submit"
          label="Upload file"
          hideInput
          handleChange={this.fileChangeHandler}
          handleSubmit={this.submitHandler}
        />
      </div>
    )
  }
}

export default App
