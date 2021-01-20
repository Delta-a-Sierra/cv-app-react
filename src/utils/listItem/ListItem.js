import React, {Component} from 'react'

class ListItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            value : this.props.value
        }

        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(e){
        this.setState({
            value : e.target.value
        })
    }

    render(){

        const {key, value} = this.state
        if(this.props.mode === 'preview'){
            return(
                <li key={key}>{value}</li>
            )
        }
        return(
            <div>
                <input type="text" onChange={this.changeValue} value={value}></input>
                <button className="input-del-btn" onClick={this.props.onDelete}>Delete</button>
            </div>

        )

    }
}

export default ListItem