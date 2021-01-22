import React, {useState} from 'react'
import uuid from 'react-uuid'
import ListItem from '../../utils/listItem/ListItem'
import './style.scss'
import RegularButton from '../../utils/regularButton/RegularButton'

const Job = (props) => {

    const [descriptions, setDescriptions] = useState([{value: 'worked on things', key: uuid()}])

    const addDescription = () => {
        setDescriptions([...descriptions, {value: 'Lorem Ipsum', key: uuid()}])
    }

    const deleteDescription = (key) => {
        const newDescription = descriptions.filter((description) => description.key !== key)
        setDescriptions(newDescription)
    }

    const {jobTitle, employerName, startDate, endDate} = props

    const descriptionList = descriptions.map((description) => <ListItem key={description.key} mode={props.mode}
    value={description.value} onDelete={() => deleteDescription(description.key)}/>)

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
                <RegularButton onClick={addDescription} text='New Description'/>
                <RegularButton onClick={props.onDelete} text='Delete Job'/>
            </div>
        </div>
    )
}

export default Job