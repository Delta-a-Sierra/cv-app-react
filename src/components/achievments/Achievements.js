import React, {useState} from 'react'
import Title from '../../utils/title/Title'
import ListItem from '../../utils/listItem/ListItem'
import uuid from 'react-uuid'
import RegularButton from '../../utils/regularButton/RegularButton'
import './style.scss'

const Achievements = (props) => {

    const [mode, setMode] = useState('preview')
    const [achievements, setAchievements] = useState([{value: 'test', key: uuid()}])

    const addAchievement = (e) => {
        e.preventDefault()
        setAchievements([...achievements, {value: 'test', key: uuid()}])
    }

    const changeMode = () => {
        if(mode === 'edit'){
            setMode('preview')
            return null
        }
        setMode('edit')
    }

    const deleteAchievement = key => {
        const newAchievements = achievements.filter(achievement => achievement.key !== key)
        setAchievements(newAchievements)
    }

    const achievementLIs = achievements.map((achievement) => <ListItem key={achievement.key} mode={mode}
    value={achievement.value} onDelete={() => deleteAchievement(achievement.key)}/>)

    return(
        <div className="Achievements">
            <Title mode={mode} titleText="Achievements" changeMode={changeMode}/>
            <ul>
                {achievementLIs}
            </ul>
            <RegularButton onClick={addAchievement} text='New Achievement' />
        </div>
    )
} 

export default Achievements