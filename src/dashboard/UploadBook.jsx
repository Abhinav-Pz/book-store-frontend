import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";



const UploadBook = () => {
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
  const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookTitle = form.bookTitle.value;
        const bookPDFURL = form.bookPDFURL.value;

        const bookObj = {
          authorName, imageURL, category, bookDescription, bookTitle, bookPDFURL
        }

        console.log(bookObj);

        // send data to db

        fetch("https://book-store-backend-vtfe.onrender.com/upload-book",  {
          method: "POST",
          headers: {
            "Content-type" : "application/json",
          },
          body: JSON.stringify(bookObj)

        }).then(res => res.json()).then(data => {
         //console.log(data);
         alert("Book uploaded successfully ! ")
         form.reset();
        })
  }


  return (
    <div className='px-2 my-12 '>
        <h2 className='mb-8 font-serif text-3xl font-bold '>Upload Your Book</h2>

       <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}

        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="bookTitle" 
           value="Book Title" 
           className='text-base'
           />
        </div>
        <TextInput
         id="bookTitle" 
         type="text"
         name='bookTitle'
        placeholder="Book name" 
        required />
      </div>

      {/* authorName */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="authorName" 
           value="authorNmae"
           className='text-base' 
           />
        </div>
        <TextInput
         id="authorName" 
         type="text"
         name='authorName'
        placeholder="Author name" 
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
           className='text-base'
           />
        </div>
        <TextInput
         id="imageURL" 
         type="text"
         name='imageURL'
        placeholder="Book image URL" 
        required />
      </div>

      {/* category */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="inputState" 
           value="Book Category"
           className='text-base' 
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
           className='text-base' 
           />
         </div>

        <Textarea 
         id="bookDescription"
         name='bookDescription'
        placeholder="Write your book description..." 
        required 
        className='w-full'
        rows={6} />

      </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookPDFURL" 
          value="Book PDF URL"
          className='text-base'
           />
        </div>
        <TextInput 
        id="bookPDFURL" 
        name='bookPDFURL'
        type="text" 
        placeholder="book pdf url" 
        required 
        />
      </div>
      <Button  type="submit" className='mt-4 btn bg-green-600 hover:bg-black'>
        Upload Book
        </Button>
       

    </form>
    </div>
  )
}

export default UploadBook