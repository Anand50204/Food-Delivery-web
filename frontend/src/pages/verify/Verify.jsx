import React, { useEffect, useState } from 'react'
import './Verify.css'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const Navigate = useNavigate();

    const verifyPayment = async ()=>{
      const response = await axios.post(url+"/api/order/verify",{success,orderId})
        Navigate("/myorders");
    }
    useEffect(()=>{
      verifyPayment();
    },[])
  return (
    <div className='verify'>
        <div className="spinner">

        </div>
      
    </div>
  )
}

export default verify
