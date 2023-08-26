
import { NextRequest, NextResponse } from "next/server";
import { cartColumns, db  } from "../../Database/Drizzel";

import {and, eq} from "drizzle-orm";


export const  POST = async (request : NextRequest)=>{
    const req= await request.json();
   
    try{
           const res  = await db.insert(cartColumns).values({
         user_id: req.user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        image_url: req.image_url,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
           
           }).onConflictDoUpdate({
            target: [cartColumns.product_title],
        set: {
          product_quantity: req.product_quantity,
          product_price: req.product_price,
        },
           }).returning();
           return NextResponse.json({ res });
           //console.log("Data posted to Database");
    }catch (error){
        //console.log("while posting Data to database");
        //console.log("error",error);
        return NextResponse.json({ message: "something went wrong" });
    }
};


export const GET = async (request: NextRequest) => {
    const uid = request.nextUrl.searchParams.get("user_id") as string;
    try {
      const res = await db
        .select()
        .from(cartColumns)
        .where(eq(cartColumns.user_id, uid));
      return NextResponse.json(res);
    } catch (error) {
      console.log(error);
      return NextResponse.json(error);
    }
  };
  
  