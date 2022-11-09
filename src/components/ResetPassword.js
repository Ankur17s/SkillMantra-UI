import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ResetPassword() {
    return (
        <div className='reset-cont'>
            <div className='logo'>
                <img src='https://t4.ftcdn.net/jpg/03/14/36/81/360_F_314368130_UKDqG7xYYsF8Os2IR9EjaV81pQDvXkDs.jpg' alt='' />
            </div>

            <div className='reset-details'>
                <h2>Request sent successfully!</h2>
                <p>We've sent a 6-digit confirmation email to your email. please enter the code in below box to verify your email.</p>
            </div>

            <input type='text' placeholder='Email address' />
            <div className='otp-code'>
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
            </div>

            <div className='new-password'>
                <input type='password' placeholder='Password' />
                <input type='password' placeholder='Confirm New Password' />
            </div>
            <Link to='/success-page'> <Button variant='dark'>Change Password</Button></Link>
            <br />
            <p className='res-code'>Don't have a code? Resend code</p>
        </div>
    )
}

export default ResetPassword
