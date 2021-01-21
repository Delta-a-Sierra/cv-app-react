import React from 'react'
import Profile from '../profile/Profile'
import ProfessionalHistory from '../professionalHistory/ProfessionalHistory'
import './style.scss'

function  MainPanel(props) {
    return(
        <div className="main">
            <Profile />
            <ProfessionalHistory />
        </div>
    )
}

export default MainPanel