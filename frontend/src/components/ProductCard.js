import React from 'react'
import Rating from '@mui/material/Rating';
import {useDispatch} from 'react-redux'
import { addCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({title,price,images,rating,_id,stock,...other}) => {
  const dispatch=useDispatch()
  const addToCart=(imgages,title,price,rating,_id,stock,other)=>{
   dispatch(addCart({imgages,title,price,rating,_id,stock,...other}));
  }

  return (
    <div className='bg-[#D3D3D3] md:w-52 p-5 m-5 rounded-lg' >
 
          <Link to='/viewproduct'
          state={{title,price,images,rating,_id,stock,...other}}>

     { !stock&&<div className='absolute bg-red-600 -m-5 p-1 rounded-lg'>No Stock</div>}
     { stock<33&&stock?<div className='absolute bg-violet-400 -m-5 p-1 rounded-lg'>Limited Stock</div>:''}
        <img className='w-[150px] h-[100px]  mx-auto' src={images[0]} alt={title}/>

       <div className='font-bold py-1'>Name : {title.split(' ')[0]}</div> 
        <div className='py-1'>Price : {price}</div>
        <div className='flex py-1'>Rating:<Rating name="half-rating" defaultValue={parseInt(rating)} precision={0.5} readOnly /></div>
</Link>
       <div className='flex justify-between'>{stock?<button className='border border-black p-2 rounded-lg'>Buy</button>:""}

        <button className='border border-black p-2 rounded-lg' onClick={()=>addToCart(images,title,price,rating,_id,stock,other)}>Add To Cart</button></div>
        </div>
    
  )
}

export default ProductCard