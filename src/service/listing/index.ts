"use server"

import { ProductType } from "@/types/product"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"


export const sellProduct = async (data:FieldValues)=>{
    try {
        const res = await fetch('http://localhost:5000/api/v1/listing/listings',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization: (await cookies()).get("accessToken")!.value
            },
            body:JSON.stringify(data)
        })
        revalidateTag("myListing")
        const result = await res.json()

        return result




        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        throw new Error(error.message);
        
    }

}



export const myProduct = async()=>{
    try {
        const res = await fetch("http://localhost:5000/api/v1/listing/my-listings", {
            method: "GET",
            headers: {
                Authorization: (await cookies()).get("accessToken")!.value
            },
            next:{tags:["myListing"]}
        })
        const data = await res.json()

        return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
        throw new Error(error.message);
    }
}
export const deleteProduct = async(id:string)=>{
    try {
        const res = await fetch(`http://localhost:5000/api/v1/listing/listing/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: (await cookies()).get("accessToken")!.value
            }
        })
        revalidateTag("myListing")
        const data = await res.json()

        return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
        throw new Error(error.message);
    }
}
export const detailsProduct = async(id:string)=>{
    try {
        const res = await fetch(`http://localhost:5000/api/v1/listing/listings/${id}`, {
            method: "GET",
            headers: {
                Authorization: (await cookies()).get("accessToken")!.value
            }
        })
      
        const data = await res.json()

        return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
        throw new Error(error.message);
    }
}
export const updateProduct = async(id:string,payload:Partial<ProductType>)=>{
    try {
        const res = await fetch(`http://localhost:5000/api/v1/listing/listing/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                Authorization: (await cookies()).get("accessToken")!.value

            },
            body: JSON.stringify(payload)

        })
        revalidateTag("myListing")
      
        const data = await res.json()

        return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
        throw new Error(error.message);
    }
}
export const singleProduct = async(id:string)=>{
    try {
        const res = await fetch(`http://localhost:5000/api/v1/listing/listings/${id}`, {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                Authorization: (await cookies()).get("accessToken")!.value

            }
        })
      
      
        const data = await res.json()

        return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
        throw new Error(error.message);
    }
}