import React from 'react'
import Image from 'next/image';


function page() {
  return (
    <div>
      <Image src="/men.PNG" alt='Img' width={1300} height={700}  className=" p-3 md:pl-20"/>
    </div>
  )
}

export default page