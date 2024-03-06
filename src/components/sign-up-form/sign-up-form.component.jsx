import { 
    createUserDocumentFromAuth,
    createAuthUserWithEmailAndPassword
 } from '../../utils/firebase/firebase.utils.js';
import { useState, useContext } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'

import { UserContext } from '../../contexts/user.context';

import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormField();            
        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('Cannot create user, email already in use');
            }
            console.log('user creation encountered an error', error);
        }        
    }

    return(
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type='text' 
                    onChange={handleChange}
                    name='displayName' 
                    value={displayName} 
                />
                <FormInput 
                    label='Email'
                    type='email' 
                    onChange={handleChange}
                    name='email' 
                    value={email} 
                />
                <FormInput 
                    label='Password'
                    type='password' 
                    onChange={handleChange}
                    name='password' 
                    value={password} 
                />
                <FormInput 
                    label='Confirm Password'
                    type='password' 
                    onChange={handleChange}
                    name='confirmPassword' 
                    value={confirmPassword} 
                />
                <Button type='submit'>Sign Up</Button>              
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm