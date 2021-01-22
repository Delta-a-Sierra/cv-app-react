import React, {useState} from 'react'

const ListItem = (props) => {

    const [listValue, setListValue] = useState(props.value)

    const changeValue = (e) => {
        setListValue(e.target.value)
    }

    const key = props.key
    if(props.mode === 'preview'){
        return(
            <li key={key}>{listValue}</li>
        )
    }

    return(
        <div>
            <input type="text" onChange={changeValue} value={listValue}></input>
            <button className="input-del-btn" onClick={props.onDelete}>Delete</button>
        </div>

    )
}

export default ListItem