import React from 'react'

import twitter from '../Picture/Twitter_Icon.svg'
import Facebook from '../Picture/Facebook_Icon.svg'
import Instagram from '../Picture/Instagram_Icon.svg'
import GitHub from '../Picture/GitHub_Icon.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <img src={twitter} alt = 'twitter_logo'/>
            <img src={Facebook} alt = 'Facebook_Icon'/>
            <img src={Instagram} alt = 'Instagram_Icon'/>
            <img src={GitHub} alt = 'GitHub_logo'/>
        </div>
    )
}