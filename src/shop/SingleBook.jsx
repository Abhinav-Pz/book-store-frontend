import React from 'react'

import { Link, useLoaderData } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


import {  Col, Row } from 'react-bootstrap'

const SingleBook = () => {
    const {_id, bookTitle, imageURL, authorName, bookDescription, bookPDFURL} = useLoaderData()
  return (
    <div className=' lg:px-23 bg-gradient-to-r from-amber-200 to-slate-200 flex items-center '>
     
      <Row className='mt-40  align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={6}>

        <h1 className='font-bold text-xl' style={{textAlign:"left"}}>Written By, &nbsp; <span style={{color:'blue'}}>{authorName}</span></h1>
        <br />
        <p className='text-xl font-serif'>{bookDescription}</p>
        <br /><span className='font-bold'>$ 15.98 </span>
        <br />
    
        <br />
        <p>View More..@</p>
        <a href="">{bookPDFURL}</a><br /><br />
        <button  className='btn btn-primary hover:bg-black border-none'><Link to='/cart'>Add to Cart</Link></button>
        
          
          
      
      </Col>
      <Col lg={3} className=''>
        <img src={imageURL} width={300} style={{borderRadius:'4px'}}  alt="" />
        <br />
        <p className='text-xl font-serif font-bold' style={{marginLeft:"100px"}}>{bookTitle}</p>
        
        
        
      </Col>
      <Col></Col>
      
      
      
        <h1 className='flex justify-center p-5 text-5xl font-serif '>You may also like :</h1>

        <div className='flex justify-center gap-12'>
        <Card style={{ width: '14rem' }} className='border-none bg-transparent'>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689880335i/56197501.jpg" />
      <Card.Body>
        <Card.Title className='font-bold font-serif'>One of Us Knows</Card.Title>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='border-none bg-transparent'>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697246029i/192724951.jpg" />
      <Card.Body>
        <Card.Title className='font-bold font-serif'>Indian Burial Ground</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='border-none bg-transparent'>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696404189i/182484343.jpg" />
      <Card.Body>
        <Card.Title className='font-bold font-serif'>Nosy Neighbors</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='border-none bg-transparent'>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1695176926i/195791352.jpg" />
      <Card.Body>
        <Card.Title className='font-bold font-serif'>Mind Games</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='border-none bg-transparent'>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700585740i/195790608.jpg" />
      <Card.Body>
        <Card.Title className='font-bold font-serif'>The Burning</Card.Title>
      </Card.Body>
    </Card>

    
      </div>
      </Row>
      
    </div>
        
  
  
  )
}

export default SingleBook