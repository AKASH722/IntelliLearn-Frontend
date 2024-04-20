import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import SecNav from './SecNav'


const Home = () => {
  return (
    <div>
      <Navbar />
      <SecNav/>
      <Outlet />
    </div>
  )
}

export default Home
