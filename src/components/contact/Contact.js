import React, {useState} from 'react'
import './style.scss'
import Title from '../../utils/title/Title'

const Contact = () => {
    
    const [mode, setMode] = useState('preview')
    const [number, setNumber] = useState('123')
    const [email, setEmail] = useState('email@email.com')
    const [street, setStreet] = useState('1 someroad')
    const [area, setArea] = useState('camberwell')
    const [city, setCity] = useState('London')
    const [postcode, setPostcode] = useState('NW1 1AB')


    const changeMode = () => {
        if(mode === 'edit'){
            setMode('preview')
            return null
        }
        setMode('edit')
    }

    const changeNumber = (e) => {
        setNumber(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changeStreet = (e) => {
        setStreet(e.target.value)
    }

    const changeArea = (e) => {
        setArea(e.target.value)
    }

    const changeCity = (e) => {
        setCity(e.target.value)
    }

    const changePostcode = (e) => {
        setPostcode(e.target.value)
    }


    if(mode === 'preview'){
        return(
            <div className="Contact">
                <Title mode={mode} changeMode={changeMode} titleText="Contact"/>   
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
            <Title mode={mode} changeMode={changeMode} titleText="Contact"/>
            <label> Number
            <input onChange={changeNumber} type="text" value={number}></input>
            </label>
            <label> email
            <input onChange={changeEmail}  type="text" value={email}></input>
            </label>
            <label> street
            <input onChange={changeStreet} type="text" value={street}></input>
            </label>
            <label> area
            <input onChange={changeArea} type="text" value={area}></input>
            </label>
            <label> city
            <input onChange={changeCity} type="text" value={city}></input>
            </label>
            <label> postcode
            <input onChange={changePostcode} type="text" value={postcode}></input>
            </label>
        </div>
    )
}

export default Contact