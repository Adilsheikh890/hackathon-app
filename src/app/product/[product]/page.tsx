import React from 'react'
import FetchData from '../../../../sanity/FetchData';
//import { Button } from '@/components/ui/button';
import  ProductsDetails from '../../Componentx/ProductsDetails';
import { client } from '../../../../sanity/lib/client';

// export async function generateStaticParams() {
//   const data = await FetchData();
//   return data.map((item: any) => ({
//     product: item.slug.current,
//   }));
// }

export default async function page({ params }: { params: any }) {

 // console.log("params,",params.product)
  const filteredData =  await client.fetch(`*[_type == "products" && slug.current == '${params.product}'][0]`)
  // const data = await FetchData();
  // console.log(data);
  // const filteredData = data.find(
  //   (item: any) => item.slug.current == params.product
  // );
  //console.log("filtered",filteredData);

  return <ProductsDetails filteredData  = {filteredData} />;

}





