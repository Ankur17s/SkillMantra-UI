import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UpdatePassword() {
    return (
        <div className='pass-cont'>
            <h1>Forgot your password</h1>
            <div className='msg'>
                <span>Please enter the email address associated with your account.</span><br />
                <span>and we'll email you a link to your password.</span>
            </div>
            <input type='text' placeholder='Email address' />
            <Link to="/reset"><Button variant="dark">Reset Password</Button></Link>
            <Link to='/'> <h3>Back</h3> </Link>
        </div>
    )
}

export default UpdatePassword
