import React from 'react'
import Header from './Header'
import { useSelector,useDispatch } from 'react-redux'
import Rating from '@mui/material/Rating';
import { removeCart } from '../store/cartSlice';
import {Link} from 'react-router-dom'

const ViewCart = () => {
 const cartItems=useSelector((state)=>state.cart.cartList);
const dispatch=useDispatch();
  return (
    <div>
     <Header/>
     <div className='mt-20'>
     {cartItems.map((item)=>{
        return(
       <div key={item._id} className='bg-gray-300 p-5 m-3 md:flex justify-between'>
         <Link to='/viewproduct'
          state={{...item,images:item.imgages}}>
        <div className='flex '>
        <div><img src={item.imgages[0]} alt={item.tit} className='w-[300px] h-[150px]'/></div>
        <div className='pl-14'>
        <div className='font-bold py-1'>Name : {item.title}</div> 
        <div className='py-1'>Price : {item.price}</div>
        <div className='flex py-1'>Rating:<Rating name="half-rating" 
        defaultValue={parseInt(item.rating)} precision={0.5} readOnly /></div>
        </div></div>
        </Link>
        <div className='flex md:flex-col justify-around'>
            <div>{item.stock?<button className='border border-black rounded-lg p-1 w-28'>Buy</button>:''}</div>
            <div><button className='border border-black rounded-lg p-1 w-28'
            onClick={()=>dispatch(removeCart(item._id))}>Remove Item</button></div>
        </div>
       </div>)
     })}
     </div>
    </div>
  )
}

export default ViewCart