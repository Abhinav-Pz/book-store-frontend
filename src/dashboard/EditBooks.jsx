import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {authorName, imageURL, category, bookDescription, bookTitle, bookPDFURL} = useLoaderData();


  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  // handle book submission 
  const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookTitle = form.bookTitle.value;
        const bookPDFURL = form.bookPDFURL.value;

        const updateBookObj = {
          authorName, imageURL, category, bookDescription, bookTitle, bookPDFURL
        }

        // console.log(bookObj);
       // update book data
       
       fetch(`https://book-store-backend-ten.vercel.app/book/${id}`, {
        method : "PATCH",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateBookObj)
       }).then(res => res.json()).then(data => {
        //console.log(data);
        alert("Book is updated successfully ! ")
       })
      
  }


  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

       <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}

        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="bookTitle" 
           value="book Title" 
           />
        </div>
        <TextInput
         id="bookTitle" 
         type="text"
         name='bookTitle'
        placeholder="Book name" 
        defaultValue={bookTitle}
        required />
      </div>

      {/* authorName */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="authorName" 
           value="authorNmae" 
           />
        </div>
        <TextInput
         id="authorName" 
         type="text"
         name='authorName'
        placeholder="Author name" 
        defaultValue={authorName}
        required />
      </div>
        </div>

        {/* 2nd row */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="imageURL" 
           value="Book image URL" 
           />
        </div>
        <TextInput
         id="imageURL" 
         type="text"
         name='imageURL'
        placeholder="Book image URL" 
        defaultValue={imageURL}
        required />
      </div>

      {/* category */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="inputState" 
           value="Book Category" 
           />
        </div>

        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }

        </Select>
      </div>
        </div>

        {/* bookDecsription */}
        <div>
        <div className="mb-2 block">
          <Label
           htmlFor="bookDescription" 
           value="Book Description" 
           />
         </div>

        <Textarea 
         id="bookDescription"
         name='bookDescription'
        placeholder="Write your book description..." 
        required 
        className='w-full'
        rows={6}
        defaultValue={bookDescription} />

      </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookPDFURL" 
          value="Book PDF URL" />
        </div>
        <TextInput 
        id="bookPDFURL" 
        name='bookPDFURL'
        type="text" 
        placeholder="book pdf url" 
        required 
        defaultValue={bookPDFURL}
        />
      </div>
      <Button  type="submit" className='mt-5 btn btn-primary'>
        Update Book
        </Button>

    </form>
    </div>
  )
}

export default EditBooks