import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const AuthProtected = () => {
  const {user} = useSelector((store)=> store.profile)
  // if(user){
  //   return <Navigate to={"/main/dashboard"} />
  // }

  return <Outlet/>
} 

export default AuthProtected