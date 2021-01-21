import React from 'react'
import Contact from '../contact/Contact'
import Qualifications from '../qualifications/Qualifications'
import Achievements from '../achievments/Achievements'
import Skills from '../skills/Skill'

function SidePanel(props) {
    return(
        <div className="side">
            <Contact />
            <Qualifications />
            <Achievements />
            <Skills />
      </div>
    )
}

export default SidePanel