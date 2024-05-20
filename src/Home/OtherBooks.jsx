import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () =>{
        fetch("https://book-store-backend-ten.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data.slice(3,8)))
    }, [])
  return (
    <div >
        <BookCards  books={books}  headline="Other Books"/>
        <br />
        <h1  style={{marginLeft:'1000px', marginTop:'-30px', marginBottom:'-70px '}} className='text-2xl font-serif p-3 font-bold'>Fiction Books</h1>
        <h1 style={{marginLeft:'250px'}} className='text-2xl font-serif p-3 font-bold'>Manga Mania Best Sellar</h1>
        
        <div className='flex justify-center gap-9'>
          
          <img src="https://www.bookswagon.com/images/promotionimages/web/4_mangamaniaWeb.jpg?v=4.5" alt="" />
          
          <img src="https://www.bookswagon.com/images/promotionimages/web/nonfictionbooksWeb.jpg?v=4.5" alt="" />
        </div>
    </div>
    
  )
}

export default OtherBooks