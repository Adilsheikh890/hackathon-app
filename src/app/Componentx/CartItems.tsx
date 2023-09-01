
"use client";
import {  Trash, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useAuth } from '@clerk/nextjs';


export default  function CartItems() {

  const [products, setProducts] = useState<any>(null);
  const [state, setState] = useState(false);
  const { isSignedIn, userId } = useAuth();

  useEffect(() => {
  fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isSignedIn, state]);

  

 
  async function deleteProduct(product_title: any){
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_title: product_title,
      }),
    });
  
    setState(!state);
    
  }


  return (
    <div>
      
      {isSignedIn ?
      
      <div className='grid md:grid-cols-4 grid-rows gap-4 p-8 mt-20 md:pl-40 '   >
        {products?.map((item:any , index :number)=>(        
             <div key={index}>
              <Image src={item.image_url} alt='image' width={200} height={200}  className='w-[200px] h-[300px]'/>

              <span className='flex'>

             
          
            <h1 className='mt-5 font-serif text-lg'>{item.product_title}</h1>
            
            

            <button
                  onClick={() => deleteProduct(item.product_title)}
                  className=" text-black  mt-5 pl-5 font-semibold"
                >
                  <Trash2 />
             </button>
             </span>
             <h1 className=' font-bold text-gray-800'> Quantity.{item.product_quantity}</h1>
            <h1 className='md:mb-10 font-sans  text-yellow-500 text-lg'>{item.product_price}</h1>
          

           
            
          
               

          
                
            
                
                
                </div>
        ))}
      </div>
    
      :
    <div className=" items-center text-3xl text-yellow-500">
      <h1 className="justify-items-center md:pl-80 mt-10 font-bold">Plese Signin your Acccount</h1>
    </div>
      }
    </div>  
  
  );
}