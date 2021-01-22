import React, {useState} from 'react'
import './style.scss'
import ModeToggleBtn from '../../utils/modeToggleBtn/ModeToggleBtn'

const Header = () => {
    this.state = {
        mode : 'preview',
        name : 'Firstname Surname',
        jobTitle: 'Job Title'
    }

    const [mode, setMode] = useState('preview')
    const [name, setName] = useState('Firstname Surname')
    const [jobTitle, setJobTitle] = useState('Job Title')

    const changeMode = () => {
        if(mode === 'edit'){
            setMode('preview')
            return null
        }
        setMode('edit')
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeTitle = (e) => {
        setJobTitle(e.target.value)
    }

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
            <input className="name" type="text" value={name} onChange={changeName}></input>
            <ModeToggleBtn mode={mode} changeMode={changeMode} />
            <input type="text" value={jobTitle} onChange={changeTitle}></input>
        </div>
    )
}

export default Header