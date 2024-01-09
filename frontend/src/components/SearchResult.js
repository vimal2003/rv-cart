//import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import Header from './Header'
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';

const SearchResult = () => {
  const location=useLocation();
  const value=location.state.searchValue.toLowerCase();
  const product = useSelector((state) => state.product.productList);
  const[data,setData]=useState([]);
  const [rating, setRating] = useState('2');
  const [brand,setBrand]=useState('');
  const [price,setPrice]=useState();
    useEffect(()=>{
      const result=product.filter((val)=>val.category.toLowerCase().includes(value)||
      val.title.toLowerCase().includes(value)||val.description.toLowerCase().includes(value))
      setData(result);
    },[product,value])
    const result1=rating?data.filter((a)=>a.rating>=parseInt(rating)):data
    const result2=brand?result1.filter((a)=>a.brand.toLowerCase()===brand.toLowerCase()):result1
    const res=price?result2.filter((a)=>a.price>=price):result2;
    const max = res.reduce((max, current) => {
      return current.price > max ? current.price : max;
    }, 0);
  return (<div>
    <Header/>
    <div className='bg-[#D3D3D3] w-[20rem] fixed h-screen pl-10'>
        <div className='text-3xl font-bold'>Filter</div>
        <div className='mt-7 mb-3 text-2xl'>Select Brand:</div>
       <select onChange={(e)=>setBrand(e.target.value)}>
        <option value="">Select Brand</option>
        {product&&Array.from(new Set(data.map(a=>a.brand))).map((a,i)=><option key={i} value={a} >{a}</option>)}
       </select>
       <div className='mt-7 mb-3 text-2xl'>Select Rating:</div>
       <div>
       <Rating
        name="simple-controlled"
        value={parseInt(rating)}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      /></div>
      <div>
      <div className='mt-7 mb-5 text-2xl'>Select Price:</div> 
      <Slider sx={{width:'200px'}}
        aria-label="Always visible"
        valueLabelDisplay="on"
        onChange={(e)=>setPrice(e.target.value)}
        max={max}
      />
      </div>
    </div>
    <div className='flex mt-[70px] '>
    {res?.length!==0?<div className='flex flex-wrap ml-[21rem] justify-around'>
     
      {
        res&&res.map((a)=>{return(
        
        <ProductCard key={a._id} {...a} />
      
        )})
      }
    </div>:
    <div className='flex h-screen text-4xl justify-center items-center mt-18'>No Result Found</div>}
   </div> </div> )
}

export default SearchResult