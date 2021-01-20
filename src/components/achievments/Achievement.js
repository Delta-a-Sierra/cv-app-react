import React, {Component} from 'react'
import Title from '../../utils/title/Title'

class Achievement extends Component{
        constructor(props){
            super(props)

            this.state = {
                value : this.props.value
            }

            this.changeValue = this.changeValue.bind(this)
        }

        changeValue(e){
            this.setState({
                texts : e.target.value
            })
        }

        render(){

            const key = this.state.key
            if(this.props.mode === 'preview'){
                return(
                    <li key={this.props.key}>{this.state.value}</li>
                )
            }
            return(
                <div>
                    <input type="text" onChange={this.changeValue} value={this.state.value}></input>
                    <button className="input-del-btn" onClick={() => this.props.onDelete(key)}>Delete</button>
                </div>

            )

        }

}

export default Achievement