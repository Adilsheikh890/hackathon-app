import Image from 'next/image';
import React from 'react'
import { cookies } from 'next/dist/client/components/headers';


export default async function page() {

  const setcookies= cookies();
  const  uid = setcookies.get("user_id")?.value;
  //console.log("user_id", uid)


  const res = await fetch(`http://localhost:3000/api/cart?user_id=${uid}`);

  const  data = await res.json();
  console.log("data",data);
  return (
    <div>
      <h1>cart</h1>
      <div className='flex gap-4'   >
        {data.map((item:any , index :number)=>(        
             <div key={index}>
              <Image src={item.image_url} alt='image' width={200} height={200} />
            <h1>{item.product_title}</h1>
            <h1>{item.product_price}</h1>
            <h1>{item.product_quantity}</h1>
            
           </div>
        ))}
      </div>
    </div>
  );
}