"use client"
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";



import Image from "next/image";
import Link from "next/link";
import { logInUser } from "@/service/Auth";
import { toast } from "sonner";
import {  useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/userContext";

const SignIn = () => {
    const {setIsLoading,setReload}=useUser()

    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);

    };

    const params=useSearchParams()
    const redireact = params.get("redirectPath")
    
  

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)
        const id = toast.loading("loading...")

        try {
            const result = await logInUser(data)
            console.log(result)

            if (result.success) {
                toast.success(result.message, { id })
                setIsLoading(true)
                setReload(true)
                if(redireact){
                    navigate.push(redireact)
                }else{
                    navigate.push('/')
                }
            
                
            } else {
                toast.error(result.message, { id })
            }






            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message || "something went wrong", { id })
        }



    };

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Section */}
                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Sign in to sasly
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Don’t have an account?{" "}
                            <Link
                                href={"/register"}
                                title="Create an account"
                                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                            >
                                Create a free account
                            </Link>
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                            <div className="space-y-5">
                                {/* Email Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            id="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            placeholder="Enter email to get started"
                                            className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border rounded-md bg-gray-50 focus:outline-none ${errors.email
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-blue-600"
                                                }`}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.email.message?.toString()}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Password Input */}
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="text-base font-medium text-gray-900"
                                        >
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            title="Forgot password?"
                                            className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="mt-2.5 relative">
                                        <input
                                            type={passwordVisible ? "text" : "password"}
                                            id="password"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters",
                                                },
                                            })}
                                            placeholder="Enter your password"
                                            className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border rounded-md bg-gray-50 focus:outline-none ${errors.password
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-blue-600"
                                                }`}
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600 focus:outline-none"
                                        >
                                            {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.password.message?.toString()}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 sm:px-6 lg:px-8">
                    <div>
                        <Image
                            height={400}
                            width={400}
                            className="w-[70%] mx-auto"
                            src="https://i.ibb.co.com/Vc6j4LZn/17017.jpg"
                            alt="Stationery Design"
                        />
                        <div className="w-full max-w-md mx-auto xl:max-w-xl">
                            <h3 className="text-2xl font-bold text-center text-black">
                                Buy  Product
                            </h3>
                            <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                                Find the perfect tools for your creative projects. From notebooks
                                to pens, we have everything you need!
                            </p>
                            <div className="flex items-center justify-center mt-10 space-x-3">
                                <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>
                                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;