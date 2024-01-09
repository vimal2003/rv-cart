import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../store/productSlice';

const useGetProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productList);
 
  useEffect(() => {
    const getProduct = async () => {
      try {
        
        const res = await axios.get('http://localhost:8000/product/get');
        if (res?.data?.products) {
          dispatch(addProduct(res?.data?.products));
        }
      } catch (err) {
        console.log(err);
      }
    };
  !product.length&& getProduct();
  }, [product, dispatch]);

  return (
    <div></div>
  );
};

export default useGetProduct;
