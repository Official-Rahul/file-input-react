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
                <input id="file" type="file"></input>
            </div>
        )
    }
}

export default FileInputReact
