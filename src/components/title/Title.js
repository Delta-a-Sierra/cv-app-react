import React, {Component} from 'react'
import './style.scss'
import ModeToggleBtn from '../../utils/modeToggleBtn/ModeToggleBtn'

class Title extends Component{
    constructor(props){
        super(props)

        this.state = {
            mode : 'preview',
            name : 'Firstname Surname',
            jobTitle: 'Job Title'
        }

        this.changeName = this.changeName.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
        this.changeMode = this.changeMode.bind(this)
    }

    changeName(e){
        this.setState({
            name : e.target.value
        })
    }

    changeTitle(e){
        this.setState({
            jobTitle : e.target.value
        })
    }


    changeMode(){
        if(this.state.mode === 'edit'){
            this.setState({
                mode : 'preview'
            })
            return
        }
        this.setState({
            mode : 'edit'
        })

    }

    render(){

        const {mode, name, jobTitle} = this.state
        if(mode === 'preview'){
            return(
                <div className="Title">
                    <h1 className="name">{name}</h1>
                    <ModeToggleBtn mode={mode} changeMode={this.changeMode} />
                    <h1>{jobTitle}</h1>
                </div>
            )
        }
        return(
            <div className="Title">
                <input className="name" type="text" value={name} onChange={this.changeName}></input>
                <ModeToggleBtn mode={mode} changeMode={this.changeMode} />
                <input type="text" value={jobTitle} onChange={this.changeTitle}></input>
            </div>
        )
    }
}

export default Title