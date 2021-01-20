import React from 'react'
import './style.scss'
import ModeToggleBtn from '../../utils/modeToggleBtn/ModeToggleBtn'

function Title(props){

    return(
        <div className="title">
            <div>
                <h2>{props.titleText}</h2>
                <ModeToggleBtn changeMode={props.changeMode} mode={props.mode}/>
            </div>
        </div>
    )
}

export default Title 