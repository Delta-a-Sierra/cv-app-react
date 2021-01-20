import React, {Component} from 'react'
import './style.scss'
import ModeToggleBtn from '../../utils/modeToggleBtn/ModeToggleBtn'

class Contact extends Component{
    constructor(props){
        super(props)

        this.state = {
            mode: 'preview',
            number: '123',
            email: "email@email.com",
            street: "1 someroad",
            area : "camberwell",
            city: "London",
            postcode : "NW1 1AB"
        }

        this.changeMode = this.changeMode.bind(this)
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

    render(){
        const {number, email, street, area, city, postcode, mode} = this.state
        if(mode === 'preview'){
            return(
                <div className="Contact">
                <div>
                    <h2>Contact</h2>
                    <ModeToggleBtn changeMode={this.changeMode} mode={mode}/>
                </div>
                    <p>{number}</p>
                    <p>{email}</p>
                    <p>{street}</p>
                    <p>{area}</p>
                    <p>{city}</p>
                    <p>{postcode}</p>
                </div>
            )
        }
        return(
            <div className="Contact">
                <div>
                    <h2>Contact</h2>
                    <ModeToggleBtn changeMode={this.changeMode} mode={mode}/>
                </div>
                <label> Number
                <input type="text" value={number}></input>
                </label>
                <label> email
                <input type="text" value={email}></input>
                </label>
                <label> street
                <input type="text" value={street}></input>
                </label>
                <label> area
                <input type="text" value={area}></input>
                </label>
                <label> city
                <input type="text" value={city}></input>
                </label>
                <label> postcode
                <input type="text" value={postcode}></input>
                </label>
            </div>
        )
    }



}

export default Contact