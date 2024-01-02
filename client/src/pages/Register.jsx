import React from 'react';
import { Form, Link, redirect,useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLogin';
import { Logo2, FormRow} from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action =async({request})=>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try{
        await customFetch.post('/auth/register',data);
        toast.success("Registration Successfull");
        return redirect('/login');
    }catch(error){
        toast.error(error?.response?.data?.msg);
        return error
    }
};


const Register = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Wrapper>
            <Form method='POST' className='form register-form'>
                <Logo2 />
                <h4>Register</h4>
               
                    <FormRow title="first name" labelText="First Name" type="text" id="name" name="name" />
                    <FormRow title="last name" labelText="Last Name" type="text" id="name" name="Secondname" />
                    <FormRow title="department" labelText="Department" type="text" id="department" name="department" />
                    
                    <FormRow title="register no" labelText="Register No" type="text" id="registerNo" name="registerNo" />
                    <FormRow title="email" labelText="Email" type="email" id="email" name="email" />
                    <FormRow title="password" labelText="Password" type="password" id="password" name="password" />
               

                <button type='submit' className='btn btn-block' disabled={isSubmitting}>
                    {isSubmitting ? 'submitting...' : 'submit'}
                </button>
                <p>
                    Already a member?
                    <Link to='/login' className='member-btn'>
                        Login
                    </Link>
                </p>
            </Form>
        </Wrapper>
    )
};
export default Register;