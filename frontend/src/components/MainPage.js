import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import useGetProduct from '../hooks/useGetProduct';
import Header from './Header'
import SubMenu from './SubMenu';
import Scrimmer from './Scrimmer';
import {images} from './constant'

const MainPage = () => {
  const product = useSelector((state) => state.product.productList);
  useGetProduct();
  if(product?.length===0)
  return <Scrimmer/>

  return (<div className=''>
    <Header />
  <div><SubMenu images={images}/></div> 
    <div className='block md:flex flex-wrap justify-around'>
      {product&&product?.map((a) => (
        <ProductCard key={a._id} {...a} />
      ))}
    </div>
    </div>
  );
};

export default MainPage;
