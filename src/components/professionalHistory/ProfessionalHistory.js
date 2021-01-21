import React, {Component} from 'react'
import './style.scss'
import Title from '../../utils/title/Title'
import uuid from 'react-uuid'
import Job from './Job'
import RegularButton from '../../utils/regularButton/RegularButton'

class ProfessionalHistory extends Component{
    constructor(props){
        super(props)

        this.state = {
            mode : 'preview',
            professionalHistory : [{jobTitle: 'JobTitle', employerName: 'Employer', startDate : '2016',
             endDate : '2020', key : uuid()}]
        }

        this.changeMode = this.changeMode.bind(this)
        this.deleteJob = this.deleteJob.bind(this)
        this.addJob = this.addJob.bind(this)
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

    deleteJob(key){
        const newJobs = this.state.professionalHistory.filter((job) => job.key !== key)
        console.log('deleting')
        this.setState({
            professionalHistory : newJobs
        })
    }

    addJob(){
        this.setState({
            professionalHistory : [...this.state.professionalHistory, {jobTitle: 'JobTitle', employerName: 'Employer',
             startDate : '2016', endDate : '2020', key : uuid()}]
        })
    }

    render(){

        const jobs = this.state.professionalHistory.map((job) => <Job jobTitle={job.jobTitle} employerName={job.employerName}
        startDate={job.startDate} endDate={job.endDate} key={job.key} mode={this.state.mode} onDelete={() => this.deleteJob(job.key)}/>)
        return(
            <div className="ProfessionalHistory">
                <Title mode={this.state.mode} titleText="Professsional History" changeMode={this.changeMode}/>
                {jobs}

                <RegularButton onClick={this.addJob} text='New Job'/>
            </div>
        )
    }
}

export default ProfessionalHistory