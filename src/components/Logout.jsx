import React, { useContext } from 'react'
import { Button, Toast } from "flowbite-react";
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Dropdown } from "flowbite-react";



const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert("Logout successfull !")
            navigate(from, {replace: true})
          }).catch((error) => {
            // An error happened.
          });
          
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
         {/* <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button> */}
         <Card className="max-w-sm py-5 p-5 shadow-lg">
      <div className="flex flex-col items-center pb-10">
        <img src="https://www.iconpacks.net/icons/1/free-user-logout-icon-304-thumb.png" alt="" />
        <br />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">You need to Login again if you logout.</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Logout Anyway</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <button onClick={handleLogout} className="inline-flex items-center rounded-lg bg-red-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">  
            Logout
          </button>
          <a
            href="admin/dashboard"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Back
          </a>
        </div>
      </div>
    </Card>
    </div>
  )
}

export default Logout