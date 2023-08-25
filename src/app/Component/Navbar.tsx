"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


import { AlignCenter,ShoppingCart,X } from 'lucide-react'

const Navbar=()=> {
    const [toggle, setToggle]= useState(true)
  return (
         
    <div className="  flex px-3  py-2 md:pl-20 pl-10 mt-5 justify-between sticky top-0 backdrop-blur-lg bg-gradient-to-tr from-white via-[#ffffffde] to-opacityDownColor md:z-20">
  
    <div className="   ">
     <Link href="/">
            <Image src="/Logo.webp" alt='logo' width={150} height={150} ></Image>
            </Link>
     </div>

     <div className="md:flex hidden ">
         <ul className=" flex md:gap-10 md:pl-20">
             <li className='hover:text-orange-500 hover:underline text-lg font-serif'>
             <Link href="/Man">Man</Link>
             </li>
             <li className='hover:text-orange-500 hover:underline text-lg font-serif '>
             <Link href="/Women">Women</Link>
             </li>
             <li className='hover:text-orange-500 hover:underline text-lg font-serif'>
             <Link href="/Productx">All Product</Link>
             </li>
         </ul>

         <div>
   
         </div>
     
        {/* {icon} */}
        
        <Link href={"/cart"}>
     <div className="flex md:pl-80   relative    items-center justify-center  ">
     
        <div className="w-4 h-4 absolute  top-0 right-0 bg-red-400 text-xs font-light rounded-full flex justify-center">3</div>
        <ShoppingCart size={24} className="w-8 h-8"/>
</div>
</Link>
</div>

     
     
     {/* hmburger */}
     <div>
     <div className=" pl-20 pr-4 md:hidden   gap-10 " onClick={()=>{setToggle(!toggle);}} >

       {toggle ?
           <AlignCenter size={25}/> : <X size={25} /> }
           
           </div>

       {/* over lay */}
       
       {!toggle && (
       <div className="fixed   top-0 left-0 bg-gray-200  max-w-md w-[200px]  h-[700px] margin-auto  flex  text-center">
       
         <ul className=" pt-5 m-8 text-black ">
             <li className="mx-5 my-2  text-xl border-b-2 hover:text-orange-500 hover:underline font-serif">
             <Link href="/Man">Man</Link>
             </li>
             <li className="mx-5 my-2 pt-4 text-xl border-b-2 hover:text-orange-500 hover:underline font-serif" >
             <Link href="/Women">Women</Link>
             </li>
             <li className="mx-5 my-2 pt-4 text-xl border-b-2 hover:text-orange-500 hover:underline font-serif">
             <Link href="/Productx">All Product</Link>
             </li>
             {/* {icon} */}

            


             <Link href={"/cart"}><ShoppingCart size={30} />
             <div className="flex md:pl-80  mt-4  rounded-xl relative  items-center justify-center  ">
        <div className="w-4 h-4 absolute  top-0 bottom-8 right-12 bg-red-400 text-xs font-light rounded-full flex justify-center">3</div>
        
         </div>
          </Link>

         </ul>
        
     </div >
      )}
      

</div>






</div>

   
  )
}

export default Navbar