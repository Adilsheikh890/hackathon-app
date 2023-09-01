import React from 'react'
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import Wrapper from '../Component/Wrapper';
import Link from 'next/link';
import { urlForImage } from '../../../sanity/lib/image';

export default async function page() {

  const  filteredData=  await client.fetch(`*[_type == "products" && category =="kids"]`)
  return (
    <div>
    <div>
    <Image src="/mert.webp" alt='Img' width={1300} height={600}  className=" p-3 md:pl-20"/>
  </div>

<div>

<Wrapper>
<div className="grid md:grid-cols-4 grid-rows gap-4     text-black md:mt-20 ">
{filteredData.map((product :any , item : number)=>(
<Link href ={`/product/${product.slug.current}`} className='p-5 ' key={item}>

<Image src={urlForImage(product.image).url()} alt=''  width={300} height={300} className="  w-full h-80 object-cover  object-center"/>
  <h1 className="mt-4 font-serif">{product.title}</h1>
  <h1 className=" font-serif">{product.decription}</h1>
  <h1 className="font-mono text-xl text-yellow-500">{product.price}.</h1>
</Link>
 
) )}

</div>
</Wrapper>
</div>

</div>

  )
}

 