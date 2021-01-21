import React, {Component} from 'react'
import uuid from 'react-uuid'
import ListItem from '../../utils/listItem/ListItem'
import './style.scss'
import RegularButton from '../../utils/regularButton/RegularButton'

class Job extends Component{
    constructor(props){
        super(props)

        this.state = {
            descriptions : [{value: 'worked on things', key: uuid()}]
        }

        this.addDescription = this.addDescription.bind(this)
        this.deleteDescription = this.deleteDescription.bind(this)
    }

    addDescription(){
        this.setState({
            descriptions : [...this.state.descriptions, {value: 'Lorem Ipsum', key: uuid()}]
        })
    }

    deleteDescription(key){
        console.log('Deleting Description')
        const newDescription = this.state.descriptions.filter((description) => description.key !== key)
        this.setState({
            descriptions : newDescription
        })
    }

    render(){
        const {jobTitle, employerName, startDate, endDate} = this.props

        const descriptionList = this.state.descriptions.map((description) => <ListItem key={description.key} mode={this.props.mode}
        value={description.value} onDelete={() => this.deleteDescription(description.key)}/>)

        return(
            <div className="Job">
                <h4>{jobTitle}</h4>
                <div className="JobDetails">
                    <h5>{employerName}</h5>
                    <h5>{startDate}-{endDate}</h5>
                </div>
                <ul>
                    {descriptionList}
                </ul>
                <div className="btm-btns">
                    <RegularButton onClick={this.addDescription} text='New Description'/>
                    <RegularButton onClick={this.props.onDelete} text='Delete Job'/>
                </div>

            </div>
        )
    }
}

export default Job