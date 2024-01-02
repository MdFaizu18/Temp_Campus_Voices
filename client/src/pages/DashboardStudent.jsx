import React from 'react';
import customFetch from '../utils/customFetch.js';
import {Logo3,Navbar} from '../components/index.js';
import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import {  createContext, useContext } from 'react';


export const loader = async () => {
  try {
    const { data } = await customFetch.get('/dashboard-student/current-user');
    return data;
  } catch (error) {
    return redirect('/')
  }
}

const DashboardContext = createContext();
const DashboardStudent = () => {
  const { user } = useLoaderData();

  return (

    <DashboardContext.Provider
      value={{
        user,
      }}
    >
          <Logo3/>
          <Navbar/>
          <div className='dashboard-page'>
              <Outlet />
          </div>
          
    </DashboardContext.Provider>
  )
}

export default DashboardStudent;
export const useDashboardContext = () => useContext(DashboardContext);
