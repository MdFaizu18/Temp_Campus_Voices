import React from 'react'
import SearchContainer from '../components/SearchContainer';
import FeedbackContainer from '../components/FeedbackContainer';
import customFetch from '../utils/customFetch';
import { redirect ,useLoaderData} from 'react-router-dom';
import { createContext, useContext } from 'react';
import { useState,useEffect } from 'react';

const AdminContext = createContext();

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get('/admin/all-feedbacks', { params });
   console.log(data);
    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};





const Admin = () => {
  const { data, searchValues } = useLoaderData();
  // const [data, setData] = useState(null);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const params = Object.fromEntries([
  //         ...new URL(request.url).searchParams.entries(),
  //       ]);
  //       const { data } = await customFetch.get('/admin/all-feedbacks',{params});
  //       setData(data);
  //     } catch (error) {
  //       redirect('/admin');
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  
  // if (!data) {
  //   return null;
  // }

  
  return (
    <AdminContext.Provider
      value={{ data,searchValues }}>

      <SearchContainer/>
      <FeedbackContainer/>

   </AdminContext.Provider>
  )
}

export default Admin;
export const useAdminContext = () => useContext(AdminContext);