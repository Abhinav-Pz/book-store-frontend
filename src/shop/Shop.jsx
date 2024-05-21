import React, { useContext, useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import {useDispatch} from "react-redux";
import { updateCart } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';




const Shop = () => {
  const [books, setBooks] = useState([]);

  const dispatch =useDispatch()

  
  

  useEffect( () =>{
    fetch("https://book-store-backend-vtfe.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])

  function handleAddtoCart(book) {
    dispatch(updateCart(book))
  }


  return (
    <div className='mt-28 px-4 lg:px24 '>
      <br />
      <br />
      <h2 className='text-5xl font-bold text-center font-serif shadow'>All Books</h2>
      <br />
      <div>
      <div className="h-96 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel leftControl="<" rightControl=">">
        <img src="https://www.bookswagon.com/bannerimages/89_inr.jpg" alt="..." />
        <img src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.1" alt="..." />
        <img src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.1" alt="..." />
        <img src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=5.1" alt="..." />
        
      </Carousel>
    </div>
      </div>
      <div className='grid gap-10 my-14 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
    {
     books.map(book =>  <Card
      className="max-w-sm shadow-lg w-72"
      imgAlt="img"
      imgSrc={book.imageURL}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {book.bookTitle}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{book.authorName}</p>
        
      </a>
      <div className="flex items-center">
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$21.09</span>
        <a onClick={()=>handleAddtoCart(book)}
          href="#"
          className="rounded-lg bg-cyan-700 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>)
}
</div>

      
    </div>
  )
}

export default Shop




{/* <div className='grid gap-10 my-14 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 '>
        {
          books.map(book =>  <Card style={{width:"270px"}}
          >
            <img src={book.imageURL} alt=""  />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.bookTitle}
                
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            
              {
                book.authorName
              }
            </p>
            <p>20.00$</p>
            <div className='flex justify-center gap-5 p-2 '>
          <button  className='bg-blue-700 font-semibold text-white py-2 p-2 rounded hover:bg-black'>Buy Now</button>
           <button onClick={()=>handleAddtoCart(book)} className='bg-green-700 font-semibold text-white py-2 p-2 rounded hover:bg-black'>Add to cart</button>
            </div>
          </Card>)
        }
      </div> */}