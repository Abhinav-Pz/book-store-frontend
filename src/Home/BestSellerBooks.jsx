import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,6)))
    }, [])
  return (
    <div >
      <div className='flex justify-center mt-5'>
        <img src="https://www.bookswagon.com/images/bestsellerheading.jpg" alt="" />
      </div>
        <BookCards  books={books} />
    </div>
  )
}

export default BestSellerBooks