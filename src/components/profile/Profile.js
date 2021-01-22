import React, {useState} from 'react'
import './style.scss'
import Title from '../../utils/title/Title'

const Profile = () => {
    const [mode, setMode] = useState('preview')
    const [profileText, setProfileText] = useState('Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ')

    const changeMode = () => {
        if(mode === 'edit'){
            setMode('preview')
            return null
        }
        setMode('edit')
    }

    const changeProfileText = (e) => {
        setProfileText(e.target.value)
    }

    if(mode === 'preview'){
        return(
            <div className="Profile">
                <Title mode={mode} titleText="Profile" changeMode={changeMode}/>
                <p>{profileText}</p>
            </div>
        )
    }
    return(
        <div className="Profile">
            <Title mode={mode} titleText="Profile" changeMode={changeMode}/>
            <textarea onChange={changeProfileText}>{profileText}</textarea>
        </div>
    )   
}

export default Profile