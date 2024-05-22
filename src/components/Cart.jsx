
import React from 'react'
import { TiShoppingCart } from 'react-icons/ti';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';



const Cart = () => {
  const cart = useSelector(state=>state.cart)
  console.log(cart);
  return (
    <>
    <div className='flex justify-center p-5'>
      <h1 className='text-4xl font-serif'>Cart </h1>
      &nbsp;<TiShoppingCart className='text-green-500 text-2xl mt-2.5' />  
    </div>
    <div className='mt-[100px] mx-5'>
      <div>
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black text-[max(1vw,12px)] bg-blue-200'>
          <p className='font-bold font-serif'>ITEMS</p> 
          <p className='font-bold font-serif'>TITLE</p> 
          <p className='font-bold font-serif'>PRICE $</p> 
          <p className='font-bold font-serif'>QT</p>  
          <p className='font-bold font-serif'>REMOVE</p> 
        </div>
        <hr />
        <br />
          {cart.map((item,i)=>{
            if(true){
              return(
               <div key={i}>
                
                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center  text-[max(1vw,12px)] m-[10px_0px] text-black'>
                  <img className='w-[150px]' src={item.imageURL}/>
                  <p className='text-xl font-mono'>{item.bookTitle}</p>
                  <p className=' font-serif'>$ 20</p>
                  <p className='font-serif'>1</p>
                  <button className='btn btn-danger w-9'>X</button>
                </div>
                <hr className='h-1'></hr>
               </div>
               
              ) 
            } 
          })}
        
           
             
        
       
      </div>
      <div className='flex justify-center p-12'>
      <Link to='/payment'> <button className='btn btn-primary p-2 hover:bg-black'>Proceed to checkout</button></Link> 
      &nbsp;
      &nbsp;
      <Link to='/shop'> <button className='btn btn-danger p-2 hover:bg-black'>Back</button></Link> 
      </div>
    </div>
    </>
  )
}

export default Cart

 
//  <div className='mt-32' key={i}>
//  <Card style={{width:"150px"}}
// className="max-w-sm mx-40"
// imgAlt="Meaningful alt text for an image that is not purely decorative"
// imgSrc={item.imageURL}>
// <div className='flex justify-center'>
// <h1>{item.authorName}</h1>
// </div>
// </Card>
// </div>



// { cart?.length>0 ? cart.map((item,i) => )

  
//   }