import React from 'react'
import FetchData from '../../../sanity/FetchData'
import { title } from 'process';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '../../../sanity/lib/image';


export default async function page () {
  const data = await FetchData();
  console.log("data", data[0].slug);
  
  return (
    <div className="flex md:flex-row flex-col gap-2   text-black md:mt-20 rounded-full">
       {data.map((product :any , index : number)=>(
          <Link href={`/product/${product.slug}`} className='p-5 w-1/8 md:m-auto key={index}'>
          
            <Image src={urlForImage(product.image).url()} alt=''  width={300} height={300} className=" w-full h-80 object-cover  object-left-top"/>
            <h1>{product.title}</h1>
            <h1>{product.decription}</h1>
            <h1>{product.price}</h1>
            <h1>category:{product.category}</h1>

            
          </Link>
      ) )}
    </div>
  )
}

