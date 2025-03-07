"use server"

import { jwtDecode } from "jwt-decode"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"

export const registerUser = async (data: FieldValues) => {
    const res = await fetch('https://assignment-6-server-ivory.vercel.app/api/v1/auth/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })
    return await res.json()
}
export const logInUser = async (data: FieldValues) => {
    const res = await fetch('https://assignment-6-server-ivory.vercel.app/api/v1/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })
    const result = await res.json()
    if (result.success) {
        (await cookies()).set("accessToken", result?.data.token)
    }

    return result
}


export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value
    let decodedData = null
    if (accessToken) {
        decodedData = await jwtDecode(accessToken);
        return decodedData
    }



}


export const logOut = async () => {
    (await cookies()).delete("accessToken")
}


export const updateProfile = async (id: string, data: FieldValues) => {
    const res = await fetch(`https://assignment-6-server-ivory.vercel.app/api/v1/auth/user/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: (await cookies()).get("accessToken")!.value
        },
        body: JSON.stringify(data)

    })
    revalidateTag("profile")
    const result = await res.json()
    return result
}

