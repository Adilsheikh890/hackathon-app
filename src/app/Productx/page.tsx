"use client";
import React from 'react'
import FetchData from '../../../sanity/FetchData'
import { title } from 'process';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '../../../sanity/lib/image';
import { Button } from '@/components/ui/button';
import Wrapper from '../Component/Wrapper';



export default async function page () {
  const data = await FetchData();

  //console.log("data", data[0].slug);
  
  return (
      <Wrapper>
        <div>
          <div className=" mt-10 "><Image src="/product.PNG" alt='image' width={1100} height={600} className=" p-3 md:pl-20"/></div>
    <div className="flex md:flex-row flex-col gap-2 items-center justify-center  text-black md:mt-20 ">
       {data.map((product :any , item : number)=>(
          <Link href ={`/product/${product.slug.current}`} className='p-5 ' key={item}>
          
          <Image src={urlForImage(product.image).url()} alt=''  width={300} height={300} className="  w-full h-80 object-cover  object-center"/>
            <h1 className="mt-4 font-serif">{product.title}</h1>
            <h1 className=" font-serif">{product.decription}</h1>
            <h1 className="font-mono">{product.price}.</h1>
          </Link>
           
      ) )}
      
    </div>
    </div>
    </Wrapper>
  )
}

