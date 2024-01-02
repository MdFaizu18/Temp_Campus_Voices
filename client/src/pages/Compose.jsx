import React from 'react'
import FormContent01 from '../components/FormContent01'
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';


export const action = async ({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try{
    await customFetch.post('/dashboard-student/feedbacks', data);
    toast.success("Submitted Successfully");
    return redirect('/dashboard-student');
  }catch(error){
    toast.error(error?.response?.data?.msg);
    return error;

  }
}

const Compose = () => {
  return (
    <div className='compose-form'>
      <FormContent01/>
    </div>
  )
}

export default Compose;
