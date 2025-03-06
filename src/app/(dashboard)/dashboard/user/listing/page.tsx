"use client";

import { sellProduct } from "@/service/listing";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { PiFilesThin } from "react-icons/pi";
import { toast } from "sonner";

const categories = ["Electronics", "Furniture", "Clothing", "Vehicles", "Books"];

export default function ListingForm() {
    const [image, setImage] = useState("");
    const [imageFile, SetImageFile] = useState<File | undefined>(undefined)

    const handleUploadImage = () => {
        document.getElementById("image_input")!.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];

        if (file) {
            SetImageFile(file)
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const id = toast.loading("creating")

        if (!imageFile) {
            toast.error("please select a image", { id })
        }
        const formData = new FormData()
        formData.append("image", imageFile!)

        try {
            const imageResponse = await axios.post(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_VITE_IMAGE_BB_KEY}`,
                formData
            );
            const imageUrl = imageResponse.data.data.display_url
            console.log(imageUrl, "image url")

            data.images = imageUrl

            

            const result = await sellProduct(data)
            console.log(result)
            if(result.success){
                toast.success(result.message,{id})
                setImage('')
                SetImageFile(undefined)
                reset()
            }else{
                toast.error(result.message, { id })
            }


            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.data.message, { id })
        }



    };

    return (
        <div className="mt-5 mx-auto p-6 bg-white rounded-lg shadow-md max-w-xl">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Create Listing</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input {...register("title", { required: "Title is required" })} placeholder="Title" className="w-full p-3 border rounded-lg shadow-sm" />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message?.toString()}</p>}

                <textarea {...register("description", { required: "Description is required" })} placeholder="Description" className="w-full p-3 border rounded-lg shadow-sm" />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message?.toString()}</p>}

                <input {...register("price", { required: "Price is required" })} placeholder="Price" type="text" className="w-full p-3 border rounded-lg shadow-sm" />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message?.toString()}</p>}

                <input {...register("condition", { required: "Condition is required" })} placeholder="Condition" className="w-full p-3 border rounded-lg shadow-sm" />
                {errors.condition && <p className="text-red-500 text-sm">{errors.condition.message?.toString()}</p>}

                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center bg-gray-100 rounded-lg border border-gray-300">
                    {image === "" ? (
                        <div className="text-center w-full">
                            <input type="file" id="image_input" className="hidden" onChange={handleFileChange} />
                            <h1 className="text-lg font-semibold text-gray-700">Upload your image</h1>
                            <p className="text-gray-500 text-sm">JPG, PNG, JPEG</p>
                            <div className="mt-5 w-full flex items-center justify-center bg-white border-2 border-dashed border-blue-500 rounded-md py-10 cursor-pointer hover:bg-gray-50 transition" onClick={handleUploadImage}>
                                <PiFilesThin className="text-4xl text-gray-600" />
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md">
                            <Image height={500} width={500} src={image} alt="image" className="w-full h-full object-cover" />
                            <MdDelete className="text-2xl text-white bg-black bg-opacity-50 p-1 absolute top-2 right-2 cursor-pointer rounded-full hover:bg-opacity-75 transition" onClick={() => {{setImage("") 
                                    SetImageFile(undefined)
                            }}} />
                        </div>
                    )}
                </div>

                <input {...register("address", { required: "Address is required" })} placeholder="Address" className="w-full p-3 border rounded-lg shadow-sm" />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message?.toString()}</p>}

                <select {...register("category", { required: "Category is required" })} className="w-full p-3 border rounded-lg shadow-sm">
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category.message?.toString()}</p>}

                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition">Submit</button>
            </form>
        </div>
    );
}
