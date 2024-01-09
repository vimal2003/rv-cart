import React from 'react'
import { useLocation } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import SubMenu from './SubMenu';

const ViewProduct = () => {
    const location = useLocation();
  const receivedData = location.state;
  return (
    <div className='md:flex h-screen items-center'>
        <div className='md:w-[40%] bg-gray-400 md:h-screen slide-container flex items-center justify-center'>
       <SubMenu images={receivedData.images}/>
        </div>
        <div className='w-[60%] p-[5%] text-2xl'>
          <div className='p-2'><span className='font-bold '>  Category:</span>{receivedData.category}</div>
          <div className='p-2'> <span className='font-bold '> Brand :</span>{receivedData.brand}</div>
          <div className='p-2'><span className='font-bold '>  Title :</span>{receivedData.title}</div>
          <div className='p-2'><span className='font-bold '>  price:</span>{receivedData.price}</div>
          <div className='p-2'> <span className='font-bold '> Rating :</span>
          <Rating name="half-rating" defaultValue={parseInt(receivedData.rating)} precision={0.5} readOnly /></div>
          <div className='p-2'> <span className='font-bold '> description:</span>{receivedData.description}</div>
        </div>
    </div>
  )
}

export default ViewProduct

