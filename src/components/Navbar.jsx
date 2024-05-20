import React, { useContext, useEffect, useState } from 'react'
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { ImBooks } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';






const Navbar = ({size}) => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const {user} = useContext(AuthContext);

    const cart = useSelector(state=> state.cart)

    //toggle menu
    const toggleMenu = () =>{
        setMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setSticky(true);
            }
            else{
                setSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    //navitems here
    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Shop", path: "/shop"},
        {link: "Sell", path: "/admin/dashboard/upload"},
        {link: "Blog", path: "/blog"},
    ]


  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-200" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8 font-semibold font-serif'>
                {/* logo */}
                <Link to='/' className='text-2x1 font-bold text-blue-900 flex items-center text-xl gap-5'>&nbsp;<ImBooks className='inline-block text-5xl ' />&nbsp;&nbsp;LIBRARY.</Link>

                {/* nav items for large device */}

                <ul className='md:flex space-x-12 hidden '>
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-800'>{link}</Link>)
                    }
                </ul>
                
                {/* btn for lg devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    
                <div className='text-2xl flex'>
                <span className='text-xl text-green-800'>{cart?.length}</span>
             <div> <Link to="/cart"> <TiShoppingCart className='text-yellow-500' /></Link></div>
             </div>
             
             
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    {
                        user? user.email : ""
                    }
                    
                </div>

                {/* menu for the mobile devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ?<FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered  className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
            </div>

            {/* navitems for sm devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"} `}>
                {
                     navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base 
                     text-white uppercase cursor-pointer '>{link}</Link>)
                }
            </div>

        </nav>
    </header>
  )
}

export default Navbar