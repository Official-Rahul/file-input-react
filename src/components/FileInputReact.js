import React, { Component } from 'react';
import './FileInputReact.css'

export class FileInputReact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fileChoosed:null,
            fileName:''
        }
    }

    handleFileChange(event){
        if(event.target.files[0]){
            let file=event.target.files[0];
            if(file){
                let fileName=file.name;
                if(fileName.length>20) {
                    fileName=fileName.substring(0,8)+'...'+fileName.substring(fileName.length-8,fileName.length);
                }
                this.setState({
                    fileChoosed:file,
                    fileName:fileName
                });
                this.props.handleChange(file)
            }
        }
        else{
            this.setState({
                fileChoosed:null
            });
            this.props.handleChange(null)
        }
    }
    
    render() {
        const { button, label, hideInput, handleSubmit } = this.props;
        const { fileName }= this.state;
        return (
            <div>
                {(label && !fileName) && <label htmlFor="file">{label}</label>}
                {(label && fileName) && <label htmlFor="file">{fileName}</label>}
                <input className={hideInput==true?'transparent':''} id="file" type="file" onChange={this.handleFileChange}></input>
                {button && <button onClick={handleSubmit}>{button}</button>}
            </div>
        )
    }
}

export default FileInputReact
