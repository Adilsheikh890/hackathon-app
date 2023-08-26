"use client";


import {  Trash2 } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useAuth } from '@clerk/nextjs';


export default async function CartItems() {

  const [products, setProducts] = useState<any>(null);
  const [state, setState] = useState(false);
  const { isSignedIn, userId } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isSignedIn, state]);

 

  //const res = await fetch(`http://localhost:3000/api/cart?user_id=user_2UUZ1e10yqOArhQO12X0Xi3WZx3`);

  //const  data = await res.json();
  //console.log("data",data);
  //const {  isSignedIn } = useAuth();
  return (
    <div>
      <h1>cart</h1>
      {isSignedIn ?
      
      <div className='flex gap-4'   >
        {products?.map((item:any , helo:number)=>(        
             <div key={helo}>
              <Image src={item.image_url} alt='image' width={200} height={200} />
            <h1>{item.product_title}</h1>
            <h1>{item.product_price}</h1>
            <h1>{item.product_quantity}</h1>

            <Trash2 size={30}/>
            
           </div>
        ))}
      </div>
    
      :
    <div>
      <h1>Plese Login</h1>
    </div>
      }
    </div>  
  );
}