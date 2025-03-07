"use client"
import { buyProduct } from "@/service/transaction";
import { ProductType } from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";


const Checkout = ({item}:{item:ProductType}) => {
    const [address, setAddress] = useState("");
    const navigate=useRouter()


    const handleConfirm = async () => {
        if (!address) {
            toast.error("please enter your address")
            return;
        }
        const data = {
            sellerID : item.userID ,
            itemID:item._id,
            address:address
        }
        console.log(data)
        const id= toast.loading("loading.")
        try {
            const result = await buyProduct(data)
            console.log(result)

            if(result.success){
                toast.success(result.message,{id})
                navigate.push('/')
            }else{
                toast.error(result.message, { id })
            }
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            toast.error(error.message)
        }
       
    };

   
    if (!item) return <p className="text-center text-red-500">Item not found.</p>;
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                {/* Product Image */}
                <Image height={500} width={500} src={item.images || ''} alt={item.title || ''} className="w-full  object-cover rounded-lg" />

                {/* Product Details */}
                <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                <p className="text-gray-600 mt-1">Seller Location: <span className="font-semibold">{item.address}</span></p>
                <p className="text-lg font-bold mt-2">Price: ৳{item.price}</p>

                {/* User Address Input */}
                <div className="mt-4">
                    <label className="block text-gray-700 font-semibold mb-1">Enter Your Address:</label>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                {/* Confirm Button */}
                <button
                    onClick={handleConfirm}
                    className="mt-4 w-full py-3 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700"
                >
                    Confirm Order
                </button>
            </div>
        </div>
    );
};

export default Checkout;