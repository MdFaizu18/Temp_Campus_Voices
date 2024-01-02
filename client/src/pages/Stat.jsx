import Wrapper from '../assets/wrappers/Stats';
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
    try {
        const response = await customFetch.get("/admin/stats");
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
};


function Stat() {
    const {
        Totalusers,
        Totalfeedbacks,
        feedbackTotalYearCount,
        feedbackTotalDepartCount,
    } = useLoaderData();
  
    // to get the year count individually 
    const yearCounts = {};
    if (feedbackTotalYearCount) {
        feedbackTotalYearCount.forEach((year) => {
            yearCounts[year._id] = year.count;
        });
    }
    // to get the depart count individually
    const departmentCounts = {};
    if(feedbackTotalDepartCount){
        feedbackTotalDepartCount.forEach((depart)=>{
            departmentCounts[depart._id]= depart.count;
        })
    }

    // Individual variables for each year count
    const countForYearI = yearCounts['I'] || 0;
    const countForYearII = yearCounts['II'] || 0;
    const countForYearIII = yearCounts['III'] || 0;
    const countForYearIV = yearCounts['IV'] || 0;

    // Individual variables for each department count
    const countForCSE = departmentCounts['CSE'] || 0;
    const countForIT = departmentCounts['IT'] || 0;
    const countForAIML = departmentCounts['AIML'] || 0;
    const countForECE = departmentCounts['ECE'] || 0;
    const countForEEE = departmentCounts['EEE'] || 0;
    const countForMEC = departmentCounts['MEC'] || 0;
    const countForBME = departmentCounts['BME'] || 0;
    const countForMBA = departmentCounts['MBA'] || 0;

    return (
        <Wrapper>
        <div className='body'>

     
            <div className='stats-heading'> <h2>Current Stats</h2></div>
            {/* grid box  */}
            <div className='stats-container-box'>

                    <div className='box-one stats-container'>
                   
                    <p>Total Users :</p>
                   <p className='stat-headcount'> 
                    {Totalusers ? Totalusers : 0}
                   </p>
                    </div>
              <div className='box-two stats-container'>
              <p>Total Feeds :</p>
              <p className='stat-headcount'> 
               {Totalfeedbacks?Totalfeedbacks:0}</p>
              </div>
              <div className='box-three stats-container'>
                    <p>First Year: {countForYearI}</p>
              </div>
              <div className='box-four stats-container'>
                    <p>Second Year: {countForYearII}</p>
              </div>
              <div className='box-five stats-container'>
                    <p>Third Year: {countForYearIII}</p>
              </div>
              <div className='box-six stats-container'>
                    <p>Four Year: {countForYearIV}</p>
              </div>
              <div className='box-depart01 stats-container'>
                    <p>CSE: {countForCSE}</p>
              </div>
              <div className='box-depart01 stats-container'>
                    <p>IT: {countForIT}</p>
              </div>
              <div className='box-depart01 stats-container'>
                    <p>ECE: {countForECE}</p>
              </div>
              <div className='box-depart01 stats-container'>
                    <p>EEE: {countForEEE}</p>
              </div>
              <div className='box-depart02 stats-container'>
                    <p>BME: {countForBME}</p>
              </div>
              <div className='box-depart02 stats-container'>
                    <p>MEC: {countForMEC}</p>
              </div>
              <div className='box-depart02 stats-container'>
                    <p>AIML: {countForAIML}</p>
              </div>
              <div className='box-depart02 stats-container'>
                    <p>MBA: {countForMBA}</p>
              </div>
           
         
            </div>
                </div>
        </Wrapper>
    );
}

export default Stat;