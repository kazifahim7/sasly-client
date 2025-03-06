/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { UserType } from "@/types/product"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

 
export const mySales = async () => {
    try {
        const res = await fetch("http://localhost:5000/api/v1/tran/sales", {
            method: "GET",
            headers: {
                Authorization: (await cookies()).get("accessToken")!.value
            },
            next: { tags: ["mySales"] }
        })
        const data = await res.json()

        return data
        
    } catch (error: any) {
        throw new Error(error.message);
    }
}
export const updateTransactionStatus = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:5000/api/v1/tran/transactions/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `${(await cookies()).get("accessToken")!.value}`,
            },
        });
        revalidateTag("mySales"); 
        const data = await res.json();
        return data; 
    } catch (error: any) {
        throw new Error(error.message); 
    }
};


export const myPurchases = async () => {
    try {
        const res = await fetch("http://localhost:5000/api/v1/tran/purchases", {
            method: "GET",
            headers: {
                Authorization: (await cookies()).get("accessToken")!.value
            },
            next: { tags: ["Purchases"] }
        })
        const data = await res.json()

        return data
        
    } catch (error: any) {
        throw new Error(error.message);
    }
}
export const buyProduct = async (data: { sellerID: string | UserType, itemID: string, address:string }) => {
    try {
        const res = await fetch("http://localhost:5000/api/v1/tran/transactions", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                Authorization: (await cookies()).get("accessToken")!.value
            },
            body:JSON.stringify(data)
        })
        const value = await res.json()

        return value
        
    } catch (error: any) {
        throw new Error(error.message);
    }
}