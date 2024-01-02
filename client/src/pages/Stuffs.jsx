import React from 'react'
import { UserStuffs } from '../components';
import customFetch from '../utils/customFetch';
import {toast} from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/dashboard-student/feedbacks");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllFeedsContext = createContext();
const Stuffs = () => {

  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <AllFeedsContext.Provider value={{ data }}>
     
      <UserStuffs/>
      </AllFeedsContext.Provider>

    </>
  )
}

export default Stuffs
export const useAllFeedsContext = () => useContext(AllFeedsContext);






