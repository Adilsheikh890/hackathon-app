import React from 'react'
import Image from 'next/image';

function page() {
  return (
    <div>
    <Image src="/women.PNG" alt='Img' width={1300} height={600}  className=" p-3 md:pl-20"/>
  </div>
  )
}

export default page