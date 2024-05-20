import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCartShopping, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';







const BookCards = ({headline, books}) => {
  return (
    
    <div className='my-16 px-4 lg:px-24 '>
        <h2 className='text-5xl text-center font-bold text-black my-5 shadow font-serif'>{headline}</h2>

        {/* cards */}
        <div  className='d-flex justify-center gap-20 relative '>
    {
          
    books.map(book =>  <Card key={book._id} className='border-none' style={{ width: '15rem' }}>
      <Link to={`/book/${book._id}`}>
      <Card.Img  variant="top" src={book.imageURL} />
      <Card.Body>
        <Card.Title className='font-serif'>{book.bookTitle}</Card.Title>
        <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
               
            </div>
            <br />
            <p>$ 21.09</p>
        <div className=' absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
          <a href="/cart"> <FaCartShopping  className='w-5 h-5 text-white'/></a>
        </div>
       
      </Card.Body>

      
      </Link>
    </Card>
    

    
  
  
  )
}


     


    
        </div>
        </div>
    

    
    
  )
}

export default BookCards