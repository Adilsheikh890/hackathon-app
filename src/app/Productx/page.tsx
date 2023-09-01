"use client";
import React from 'react'
import FetchData from '../../../sanity/FetchData'
import { title } from 'process';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '../../../sanity/lib/image';
import { Button } from '@/components/ui/button';
import Wrapper from '../Component/Wrapper';




export default  async function page () {
  const data = await FetchData();

  //console.log("data", data[0].slug);
  
  return (
    
        <div>
          <div className=" mt-10 "><Image src="/product.PNG" alt='image' width={1300} height={600} className=" p-3 md:pl-20"/></div>
          <Wrapper>
    <div className="grid md:grid-cols-4 grid-rows gap-4   text-black md:mt-20 ">
       {data.map((product :any , item : number)=>(
          <Link href ={`/product/${product.slug.current}`} className='p-5 ' key={item}>
          
          <Image src={urlForImage(product.image).url()} alt=''  width={200} height={300} className="  w-[400px]  h-[300px] object-cover  object-center"/>
            <h1 className="mt-4 font-serif">{product.title}</h1>
            <h1 className=" font-serif">{product.decription}</h1>
            <h1 className="font-mono text-xl text-yellow-500">{product.price}.</h1>
          </Link>
           
      ) )}
      
    </div>
    </Wrapper>
    </div>

  )
}

