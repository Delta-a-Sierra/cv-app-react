import React, {Component} from 'react'
import "./style.scss"
import Qualification from './Qualification'
import ModeToggleBtn from '../../utils/modeToggleBtn/ModeToggleBtn'
import uuid from 'react-uuid'



class Qualifications extends Component{
    constructor(props){
        super(props)

        this.state = {
            mode : 'preview',
            qualifications : [{location: 'Yale', qualification: 'Comp Sci', key: uuid()}]
        }

        this.changeMode = this.changeMode.bind(this)
        this.addQualification = this.addQualification.bind(this)
        this.deleteQualification = this.deleteQualification.bind(this)
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

    addQualification(e){
        e.preventDefault()
        this.setState({
            qualifications: [...this.state.qualifications, {location: 'Location', qualification: 'Qualification', key: uuid()}]
        })
    }

    deleteQualification = key => {
        const updatedQualifications = this.state.qualifications.filter(qualification => qualification.key !== key)
        this.setState({
            qualifications: [...updatedQualifications]
        })
    }

    render(){
        const qualifications = this.state.qualifications.map((qualification) => <Qualification key={qualification.key} mode={this.state.mode}
        location={qualification.location} qualification={qualification.qualification} deleteEntry={() => this.deleteQualification(qualification.key)}/>)

        console.log(qualifications)

        return(
            <div className="Qualifications">
                <div>
                    <h2>Qualifications</h2>
                    <ModeToggleBtn changeMode={this.changeMode} mode={this.state.mode}/>
                </div>
                {qualifications}
                <button className="rg-btn" onClick={this.addQualification}>New Qualification</button>
            </div>

        )

    }
}

export default Qualifications