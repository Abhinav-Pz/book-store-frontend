import React from 'react'
import BannerCard from '../Home/BannerCard'


const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-gradient-to-r from-amber-200 to-slate-200 flex items-center '>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black font-serif  mx-5'>Buy and Sell Your Books&nbsp;
             <span className='text-blue-700 font-serif'>for  best Prices</span></h2>
            <p className='md:w-4/5 text-lg font-serif mx-5'>"Library: Your Literary Haven Online" is a curated virtual sanctuary for book enthusiasts. Browse through an extensive collection of both timeless classics and contemporary gems, meticulously organized for effortless exploration. Engage with fellow bibliophiles through vibrant discussion forums and book clubs, fostering a community bound by a shared love for the written word.</p>
                 <div className='mx-5'>
                    <input type="search" name='search' id='search' placeholder='Search a book' className='py-2  rounded 
                    px-2 rounded-s-sm outline-none border-none' /> 
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black rounded border-none 
                    transition-all ease-in duration-200'>Search</button>
                 </div>
        </div>

        {/* right side */}
        <div >
            <BannerCard/>
        </div>
        </div>
    </div>
  )
}

export default Banner