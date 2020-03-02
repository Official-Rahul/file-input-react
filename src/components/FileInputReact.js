import React, { Component } from 'react';
import './FileInputReact.css'

export class FileInputReact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fileChoosed:null
        }
    }

    handleFileChange=(event)=>{
        if(event.target.files[0]){
            let name=event.target.files[0].name;
            if(event.target.files[0]){

            }
            this.setState({
                fileChoosed:event.target.files[0],
                name:name
            });
        }
        else{
            this.setState({
                fileChoosed:null
            });
        }
    }
    
    render() {
        const { button, label, hideInput } = this.props;
        return (
            <div>
                {label && <label htmlFor="file">{label}</label>}
                <input className={hideInput==true?'transparent':''} id="file" type="file" onChange={this.handleFileChange}></input>
                {button && <button>{button}</button>}
            </div>
        )
    }
}

export default FileInputReact
