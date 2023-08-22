import React from 'react'
import FetchData from '../../../../sanity/FetchData';

export default  async function  page({params}: {params:any}) {

  const data = await FetchData();
  //console.log("data",data);
  const filteredData = data.find((item : any ) => item.slug.current == params.product);

  //console.log("params", filteredData );
  return (
    <div>
      <h1>Title:{filteredData.title}</h1>
      <h1>description:{filteredData.description}</h1>
      <h1>category:{filteredData.category}</h1>
      <h1>price:{filteredData.price}</h1>
</div>
  )
}