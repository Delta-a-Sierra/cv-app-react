import React, {useState} from 'react'
import './style.scss'
import Title from '../../utils/title/Title'
import uuid from 'react-uuid'
import Job from './Job'
import RegularButton from '../../utils/regularButton/RegularButton'

const ProfessionalHistory = () => {
    const [mode, setMode] = useState('preview')
    const [professionalHistory, setProfessionalHistory] = useState([{jobTitle: 'JobTitle', employerName: 'Employer',
    startDate : '2016', endDate : '2020', key : uuid()}])

    const changeMode = () => {
        if(mode === 'edit'){
            setMode('preview')
            return null
        }
        setMode('edit')
    }

    const deleteJob = (key) => {
        const newJobs = professionalHistory.filter((job) => job.key !== key)
        setProfessionalHistory(newJobs)
    }

    const addJob = () => {
        setProfessionalHistory([...professionalHistory, {jobTitle: 'JobTitle', employerName: 'Employer',
             startDate : '2016', endDate : '2020', key : uuid()}])
    }

    const jobs = professionalHistory.map((job) => <Job jobTitle={job.jobTitle} employerName={job.employerName}
    startDate={job.startDate} endDate={job.endDate} key={job.key} mode={mode} onDelete={() => deleteJob(job.key)}/>)
    return(
        <div className="ProfessionalHistory">
            <Title mode={mode} titleText="Professsional History" changeMode={changeMode}/>
            {jobs}

            <RegularButton onClick={addJob} text='New Job'/>
        </div>
    )
}
export default ProfessionalHistory