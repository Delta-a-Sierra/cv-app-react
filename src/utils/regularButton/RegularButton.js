import React from 'react'
import './style.scss'


function RegularButton(props){

    return(
        <button className="rg-btn" onClick={props.onClick}>{props.text}</button>
    )
}

export default RegularButton