import React from 'react'
import { Outlet } from 'react-router-dom'
import { Logo3, NavbarAdmin } from '../components';

const AdminLayout = () => {
  return (
    <div className='.body'>
      <Logo3/>
      <NavbarAdmin/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout;
