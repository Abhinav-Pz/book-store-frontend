import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

const MyFooter = () => {
  return (
    <Footer className='bg-gray-600'>
    <div className="w-full">
      <div className="  gap-72 px-6 py-8 md:grid-cols-4 d-flex justify-center">
        <div >
          <Footer.Title className='text-white font-serif text-xl' title="Company" />
          <Footer.LinkGroup className='text-white' col>
            <Footer.Link href="/">Home</Footer.Link>
            <Footer.Link href="/shop">Shop</Footer.Link>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="#">Blog</Footer.Link>
          </Footer.LinkGroup>
       </div>
        <div>
          <Footer.Title className='text-white font-serif text-xl' title="help center" />
          <Footer.LinkGroup className='text-white' col>
            <Footer.Link href="#">Discord Server</Footer.Link>
            <Footer.Link href="#">Twitter</Footer.Link>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title className='text-white font-serif text-xl' title="legal" />
          <Footer.LinkGroup className='text-white' col>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title className='text-white font-serif text-xl' title="download" />
          <Footer.LinkGroup className='text-white' col>
            <Footer.Link href="#">iOS</Footer.Link>
            <Footer.Link href="#">Android</Footer.Link>
            <Footer.Link href="#">Windows</Footer.Link>
            <Footer.Link href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div >
      <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between ">
        <Footer.Copyright className='text-white font-serif text-xl' href="#" by="BookStore™" year={2024} />


        <div>
        <MDBFooter className='text-center text-white'>
      <MDBContainer className='p-1 pb-0 '>
        <section className='mb-2 '>
          <MDBBtn
            floating
            className='m-1 border-none'
            style={{ backgroundColor: '' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 border-none'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 border-none'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1 border-none'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 border-none'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 border-none'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      </MDBFooter>
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter