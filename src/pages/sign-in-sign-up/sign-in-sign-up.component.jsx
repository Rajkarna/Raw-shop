import React from 'react'

import './sign-in-sign-up.styles.scss'
import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'

const SignInSignUp = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUp;