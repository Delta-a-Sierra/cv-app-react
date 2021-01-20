import React, {Component} from 'react'
import "./style.scss"


class Qualification extends Component{

    constructor(props){
        super(props)

        this.state = {
            qualification : this.props.qualification,
            location: this.props.location,
            key: this.props.key
        }

        this.changeLocation = this.changeLocation.bind(this)
        this.changeQualification = this.changeQualification.bind(this)
    }

    changeLocation(e){
        this.setState({
            location: e.target.value
        })
    }

    changeQualification(e){
        this.setState({
            qualification: e.target.value
        })
    }


    render(){
        const {qualification, location} = this.state

        if(this.props.mode === 'preview'){
            return(
                <div className="Qualification">
                    <p className="bold">{location}</p>
                    <p>{qualification}</p>
                </div>
            )
        }
        return(
            <div className="Qualification">
                <label>
                    School / University
                    <input type="text" className="bold" value={location} onChange={this.changeLocation}></input>
                </label>
                <label>
                    Qualification
                    <input type="text" className="bold" value={qualification} onChange={this.changeQualification}></input>
                </label>
                <button className="rg-btn" onClick={() => this.props.deleteEntry(this.state.key)}>delete</button>

            </div>
        )
    }
    
}

export default Qualification