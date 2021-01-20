import React, {Component} from 'react'
import Title from '../../utils/title/Title'
import ListItem from '../../utils/listItem/ListItem'
import uuid from 'react-uuid'
import RegularButton from '../../utils/regularButton/RegularButton'
import './style.scss'

class Skills extends Component{
    constructor(props){
        super(props)

        this.state = {
            mode : 'preview',
            skills : [{skill: 'React', key : uuid()}]
        }

        this.changeMode = this.changeMode.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.newSkill = this.newSkill.bind(this)
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

    newSkill(){
        this.setState({
            skills : [...this.state.skills, {skill: 'skill', key : uuid()}]
        })
    }

    deleteItem(key){
        const newList = this.state.skills.filter((skill) => skill.key !== key)
        this.setState({
            skills : newList
        })
    }

    render(){
        const mode = this.state.mode

        const skillLIs = this.state.skills.map((skill) => <ListItem key={skill.key} mode={mode}
        value={skill.skill} onDelete={() => this.deleteItem(skill.key)}/>)

        return(
            <div className="Skills">
                <Title mode={mode} titleText='Skills' changeMode={this.changeMode}/>
                <ul>
                    {skillLIs}
                </ul>
                <RegularButton mode={mode} text="New Skill" onClick={this.newSkill}/>
            </div>
        )
    }
}

export default Skills