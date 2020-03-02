import React, { Component } from 'react';
import './FileInputReact.css'

export class FileInputReact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { button, label, hideInput } = this.props;
        return (
            <div>
                {label && <label for="file">{label}</label>}
                <input className={hideInput==true?'transparent':''} id="file" type="file"></input>
                {button && <button>{button}</button>}
            </div>
        )
    }
}

export default FileInputReact
