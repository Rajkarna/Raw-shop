import React , {Component} from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input-component'

import './signin.styles.scss'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name] : value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h3>I already have an acoount</h3>
                <span>sign in with email and password</span>


                <form onSubmit={this.handleSubmit}>
                
                    <FormInput 
                        name="email" 
                        type="email" 
                        value = {this.state.email} 
                        label = 'email'
                        handleChange={this.handleChange}
                        required 
                    />
                
                    <FormInput 
                        name="password" 
                        type="password"
                        value = {this.state.password} 
                        label = 'password'
                        handleChange={this.handleChange}
                        required 
                    />

                <div className='buttons'>
                    <CustomButton type="submit"> sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign In With Google</CustomButton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn;