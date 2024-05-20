import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from "../assets/awardbooks.png"


const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-gradient-to-r from-blue-400 to-red-200 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug font-serif'>2024 National Book Awards for 
                    Fiction Shortlist</h2>
                    <Link to="/shop" className=' block'> <button className='bg-black text-white font-semibold px-5 py-2 rounded
             hover:bg-yellow-100 transition-all duration-300'>Get Promo Code</button></Link>
            </div>

            <div>
                <img style={{borderRadius:"20px"}} src="https://img.freepik.com/premium-photo/low-angle-view-winning-trophy-stack-books-against-blue-background_441362-889.jpg" alt="" className='w-96 ' />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner