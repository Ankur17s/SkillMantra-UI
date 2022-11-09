import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FinalPage() {
    return (
        <div className='final-cont'>
            <div className='final-logo'>
                <img src='https://media-exp1.licdn.com/dms/image/D4D0BAQGrvLbtKYpKHw/company-logo_100_100/0/1667633002611?e=2147483647&v=beta&t=6wUqxcfRQ3u55Gr3B9je5nl75aOL871UQY796Nu2rsA' />
            </div>
            <h2>Password changed </h2>
            <h2>successfully!</h2>
            <Link to='/'> <Button variant='dark'>Go to Homepage</Button></Link>

        </div>
    )
}

export default FinalPage
