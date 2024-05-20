import React from 'react'

import {  Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


import { Card } from "flowbite-react";




const About = () => {
  return (
    <>
   <div>
    <div className='flex justify-center mt-40 '>
      <h1 className='font-bold text-5xl font-serif'>About Us</h1>
    </div>
    <br />
    <br />
    <h3 style={{marginTop:'640px'}} className='position-absolute text-4xl font-mono mx-9 shadow-lg'>The right book in the right hands at the right time
can change the world.</h3>
    <img className='w-100' src="https://static.vecteezy.com/system/resources/thumbnails/038/002/140/small_2x/ai-generated-an-open-book-on-a-table-in-a-library-with-shelves-of-books-in-the-background-photo.jpg" alt="" />
   </div>

   <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>

        <h1 className='font-bold text-4xl font-serif' style={{textAlign:"left"}}>Who We Are </h1>
        <br />
        <p className='font-serif'>Welcome to Library, your haven for literary exploration and discovery.
           Nestled within our quaint walls lies a treasure trove of diverse narratives waiting to be uncovered. From timeless classics to contemporary bestsellers, we curate an eclectic collection to cater to every reader's palate. Immerse yourself in the aroma of freshly printed pages as you embark on a journey through the boundless realms of imagination.
           At Library, we believe that every book has a story to tell, and we invite you to embark on your next literary adventure with us.
        </p>

          <Link to={'/'} className='btn btn-info mt-4 px-3 font-serif'> Explore</Link>&nbsp;&nbsp;&nbsp;
          
      
      </Col>
      <Col lg={5}>
        <img className='mx-4' src="https://cdn.pixabay.com/photo/2018/07/20/10/58/suitcase-3550399_640.jpg" width={590} style={{borderRadius:'4px'}}  alt="" />
      </Col>
      <Col></Col>
      </Row>
      <br />
      <br />
      <br />
      <div >
        <h2 className='text-3xl font-serif flex justify-center text-uppercase'>A Few things that you can do in this store</h2>
      </div>
      <br />
      <br />
    
      <div className='flex justify-center gap-40'>
      <Card
      className="max-w-sm "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://bookish.netgalley.com/wp-content/uploads/2020/10/WAB-Oct_Nov_Dec-Designs-1-3.png "
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        1. See what books your friends are reading.
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Read the book your friends are reading and recomend others about our website.
      </p>
    </Card>

    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://res.cloudinary.com/conversion-rate-experts/image/upload/w_1200,dpr_auto,c_scale,f_auto,q_auto/great-resources.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        2. Upload Your favorite books.
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        You can upload and sell your books for best prices from all over the world.
      </p>
    </Card>
    </div>
<br />
<br />
<br />
    <div className='flex justify-center gap-40'>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://t3.ftcdn.net/jpg/01/36/83/98/360_F_136839850_BTsOH0IbjrXlBK8QVy3YjBerlzZt4tb6.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        3. Check out your personalized book categories.
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Read books as from your favorite category.
      </p>
    </Card>

    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://goalmanager.co.uk/goal-manager/media/goalmanager-casemanagers-header01.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        4. Manage your uploaded books.
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        You can manage your uploaded books , like you can edit books title, authorName, description etc.
      </p>
    </Card>

    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://media.istockphoto.com/id/1303530194/photo/close-up-on-customer-man-hand-pressing-on-smartphone-screen-with-five-star-rating-feedback.jpg?b=1&s=612x612&w=0&k=20&c=HsemfvRHcn9fLoDkoH65zQ8zKdw1JfO00Sjer1MgRu4="
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        5. Find out if a book is a good fit for you from our community’s reviews.
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Choose a book to read which has good reviews.
      </p>
    </Card>
    </div>

    <br />
    <br />
    <br />
    <br />
      
      
      
   </>
  )
}

export default About