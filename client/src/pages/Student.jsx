import React from 'react'
import StudentContent01 from '../components/StudentContent01';
import About from './About';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, createContext } from 'react';
import customFetch from '../utils/customFetch';

const StudentContext = createContext();
const Student = () => {

  const navigate = useNavigate();
  const logoutUser = async () => {
    navigate('/');
    await customFetch.get("/auth/logout");
    toast.success("Logout Successfully")
    console.log('logout user');
  };

 

  return (
    <>
      <StudentContext.Provider value={{
        logoutUser
      }}
      >
    <div className="main-page">

    <div className="layer-one">
     <StudentContent01/>
    </div>
     
    <div className="">
    <About/>
    </div> 

    
    </div>
    </StudentContext.Provider>
    </>
  )
}
export const useStudentContext = () => useContext(StudentContext);
export default Student
