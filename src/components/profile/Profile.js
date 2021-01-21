import React, {Component, component} from 'react'
import './style.scss'
import Title from '../../utils/title/Title'

class Profile extends Component{
    constructor(props){
        super(props)

        this.state = {
            mode: 'preview',
            profileText : 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
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

        const {mode, profileText} = this.state

        if(mode === 'preview'){
            return(
                <div className="Profile">
                    <Title mode={mode} titleText="Profile" changeMode={this.changeMode}/>
                    <p>{profileText}</p>
                </div>
            )
        }
        return(
            <div className="Profile">
                <Title mode={mode} titleText="Profile" changeMode={this.changeMode}/>
                <textarea>{profileText}</textarea>
            </div>
        )


    }
}

export default Profile