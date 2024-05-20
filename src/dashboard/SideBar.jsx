import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { AuthContext } from '../contexts/AuthProvider';

 export const SideBar = () => {
  const {user} = useContext(AuthContext);
  console.log(user);

  //

  
  return (
    
    <Sidebar aria-label="Sidebar with content separator example" className='p-5 mt-1 mx-2  '>
         <Sidebar.Logo className=' '
         href="/"   img={user?.photoURL} imgAlt="">
        <p>
            {
              user?.displayName || "Book Store"
            }
        </p>
      </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item  href="/admin/dashboard" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          <p>
            Upload Books
          </p>
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          <p>
            Manage Books
          </p>
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiUser}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiShoppingBag}>
          Products
        </Sidebar.Item>
        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
          <p>
            Sign In
          </p>
        </Sidebar.Item>
        <Sidebar.Item href="/logout" icon={HiTable}>
          <p>
           <button  className='btn btn-danger'> Log Out</button>
          </p>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          Upgrade to Pro
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiViewBoards}>
          Documentation
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiSupport}>
          Help
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default SideBar