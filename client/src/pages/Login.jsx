import React from 'react';
import { Form, Link,useNavigation,redirect,useLoaderData} from 'react-router-dom';
import { Logo2,FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLogin';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
// import { useLoginContext } from './LoginMainPage';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const userEmail = data.email;
    try{
        // to getting role from the user 
        const userDetails = await customFetch.get(`/users/${userEmail}`);
        console.log(userDetails);
        const userRole = userDetails.data?.user?.role;
        console.log(userRole);
         await customFetch.post('/auth/login',data);
         toast.success("Login Successfull");
         return redirect(userRole=='admin' ? '/admin' : '/dashboard-student'); //return redirect(user.role === 'user' ? '/dashboard-student' : '/admin');
        }catch(error){
            toast.error(error?.response?.data?.msg);
            return error;
        }
};


const Login = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state==='submitting';

   
    
    return (
        <Wrapper>
            <Form method="POST" className="form">
                <Logo2 />
                <h4>Login</h4>

                <FormRow title="email" labelText="Email" type="email" id="email" name="email" />
                <FormRow title="register no" labelText="Register No" type="text" id="registerNo" name="registerNo" />
                <FormRow title="password" labelText="Password" type="password" id="password" name="password" />
                <button type='submit' className='btn btn-block' disabled={isSubmitting}>
                    {isSubmitting ? 'submitting...' : 'submit'}
                </button>
            
                <p>
                    Not Registered yet?
                    <Link to="/register" className="member-btn">
                        Register
                    </Link>
                </p>
            </Form>
        </Wrapper>
    );
};
export default Login;










// export const action = async({request})=>{
//     const formData = await request.formData();
//     const data = Object.fromEntries(formData);
//     const { user } = useDashboardContext();
//     try{
//         await customFetch.post('/auth/login',data);
//         toast.success("Login Successfull");
//         return redirect(user.role==='user'?'/dashboard-student':'/admin');
//     }catch(error){
//         toast.error(error?.response?.data?.msg);
//         return error;
//     }
// }
