import React, { Component } from 'react'

export class FileInputReact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { button, label } = this.props;
        return (
            <div>
                {label && <label for="file">{label}</label>}
                <input id="file" type="file"></input>
                {button && <button>{button}</button>}
            </div>
        )
    }
}

export default FileInputReact
