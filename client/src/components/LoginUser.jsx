import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardStudent';


const LoginUser=()=> {

    const { user = {} } = useDashboardContext();
    const slicedName = user?.name ? user.name.slice(0, 10): '';
    
    return (
        <div className='loginUser'>         
            <FaUserCircle className='imported-icon-user'/>
            {slicedName.length >= 10 ? `${slicedName}...` : slicedName}
        </div>
    )
}

export default LoginUser;
