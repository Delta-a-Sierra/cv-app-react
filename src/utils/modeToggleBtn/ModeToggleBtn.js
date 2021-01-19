import React, {Component} from 'react';
import './style.scss'

function ModeToggleBtn(props){

    if(props.mode === 'preview'){
        return(
            <button className="EditBtn" onClick={props.changeMode}></button>
        )
    }
    return(
        <button className="ConfirmBtn" onClick={props.changeMode}></button>
    )
}

export default ModeToggleBtn