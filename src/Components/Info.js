import React from 'react'
import pic from '../Picture/profile.png'
import linkedIn from "../Picture/linkedIn.svg"
import { HiMail } from "react-icons/hi";

export default function Info() {
    return (
        <div className='info'>
            <div className='info--status'>
                <img src={pic} alt='profile' className='info--profile'/>
                <h1 className='info--status--name'>Laura Smith</h1>
                <p className='info--status--role'>Frontend Developer</p>
                <p className='info--status--web'>laurasmith.website</p>
            </div>
            <div className='info--button--holder'>
                <button className='info--button info--email'> < HiMail /> <span>Email</span> </button>
                <button className='info--button info--linkedIn'> <img src={linkedIn} /> <span>LinkedIn</span></button>
            </div>
        </div>
    )
}