import React, { Component } from 'react';
import './App.css'
import { FileInputReact } from "./components/FileInputReact";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <FileInputReact
          button="Submit"
          label="Upload file"
        />
      </div>
    )
  }
}

export default App
