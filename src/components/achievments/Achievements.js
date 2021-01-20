import React, {Component} from 'react'
import Title from '../../utils/title/Title'
import Achievement from './Achievement'
import uuid from 'react-uuid'
import RegularButton from '../../utils/regularButton/RegularButton'
import './style.scss'

class Achievements extends Component{
    constructor(props){
        super(props)

        this.state = {
            mode: 'preview',
            achievements : [{value: 'test', key: uuid()}]
        }

        this.changeMode = this.changeMode.bind(this)
        this.addAchievement = this.addAchievement.bind(this)
        this.deleteAchievement = this.deleteAchievement.bind(this)
    }


    addAchievement(e){
        e.preventDefault()
        this.setState({
            achievements : [...this.state.achievements, {value: 'test', key: uuid()}]
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

    deleteAchievement = key => {
        const newAchievements = this.state.achievements.filter(achievement => achievement.key !== key)
        this.setState({
            achievements : newAchievements
        })
    }

    render(){

        const achievementLIs = this.state.achievements.map((achievement) => <Achievement key={achievement.key} mode={this.state.mode}
         value={achievement.value} onDelete={() => this.deleteAchievement(achievement.key)}/>)

        return(
            <div className="Achievements">
                <Title mode={this.state.mode} titleText="Achievements" changeMode={this.changeMode}/>
                <ul>
                    {achievementLIs}
                </ul>
                <RegularButton onClick={this.addAchievement} text='New Achievement' />
            </div>
        )
    }
} 

export default Achievements