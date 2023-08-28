
"use client";
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
  const  await= fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isSignedIn, state]);

  

 
  return (
    <div>
      
      {isSignedIn ?
      
      <div className='flex gap-4'   >
        {products?.map((item:any , items :number)=>(        
             <div key={items}>
              <Image src={item.image_url} alt='image' width={200} height={200} />
            <h1>{item.product_title}</h1>
            <h1>{item.product_price}</h1>
            <h1>{item.product_quantity}</h1>

            <Trash2 size={30}/>
            
           </div>
        ))}
      </div>
    
      :
    <div className="items-center text-3xl text-yellow-500">
      <h1 className="justify-items-center md:pl-80 mt-10 font-bold">Plese Signin your Acccount</h1>
    </div>
      }
    </div>  
  );
}