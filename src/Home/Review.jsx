import React from 'react'
import { FaStar } from "react-icons/fa6"
import Card from 'react-bootstrap/Card';
import { Avatar } from "flowbite-react";
import ProPic from "../assets/profile.jpg"
import { Rating } from "flowbite-react";


const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 shadow leading-snug font-serif'>Customer Feedbacks</h2>

        <div className='d-flex justify-content-center'>
            
        <Card className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border' style={{ width: '18rem' }}>
            
        <Card.Body>
            <Card.Header>
            <Avatar  img="https://content.latest-hairstyles.com/wp-content/uploads/cute-short-hair-for-women-with-square-faces.jpg" alt="avatar of Jese" rounded />
            </Card.Header>
            
          <Card.Title>Jesse</Card.Title>
          <Card.Text>
          "Navigating this book store website is a breeze, with its user-friendly interface and comprehensive search options.
          </Card.Text>
          <br />
          <div>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
               
            </div>
        </div>
        </Card.Body>
      </Card>

      <Card className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border' style={{ width: '18rem' }}>
            
            <Card.Body>
                <Card.Header>
                <Avatar  img="https://cdn.shopify.com/s/files/1/1045/8368/files/Bearded-man-with-dark-hair-and-blue-jumper-wearing-chunky-Wayfarer-spectacles-frame.jpg?v=1654864517" alt="avatar of Jese" rounded />
                </Card.Header>
                
              <Card.Title>Tom</Card.Title>
              <Card.Text>
              "This book store website is a reader's paradise, offering a seamless browsing experience and a vast selection of titles.
              </Card.Text>
              <br />
              <div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            </Card.Body>
          </Card>

          <Card className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border' style={{ width: '18rem' }}>
            
            <Card.Body>
                <Card.Header>
                <Avatar  img="https://as1.ftcdn.net/v2/jpg/02/65/72/98/1000_F_265729869_mYcOBHGd1ifo9ocwmfDIc4tl5jN7M7sy.jpg" alt="avatar of Jese" rounded />
                </Card.Header>
                
              <Card.Title>Chris</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <br />
              <div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            </Card.Body>
          </Card>

          <Card className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border' style={{ width: '18rem' }}>
            
            <Card.Body>
                <Card.Header>
                <Avatar className='w-15' img={ProPic} alt="avatar of Jese" rounded />
                </Card.Header>
                
              <Card.Title>Milli</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <br />
              <div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
            </Card.Body>
          </Card>
        </div>

       
    </div>
    
  )
}

export default Review