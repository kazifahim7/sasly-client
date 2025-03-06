"use client"
import { registerUser } from "@/service/Auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "sonner";


const SignUpSection = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate =useRouter()



    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      
        const id = toast.loading("loading...")

        try {
            const result = await registerUser(data)
            
            if(result.success){
                toast.success(result.message,{id})
                navigate.push('/login')
            }else{
                toast.error(result.message,{id})
            }






        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            toast.error(error.message || "something went wrong",{id})
        }


    };

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 ">


                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Sign up to Sasly
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Already have an account?{" "}
                            <Link
                                href={"/login"}
                                className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                            >
                                Login
                            </Link>
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                            <div className="space-y-5">
                                {/* Name input */}
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        First & Last Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            {...register("name", { required: "Name is required" })}
                                            placeholder="Enter your full name"
                                            className="block w-full py-4 px-4 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.name.message?.toString()}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Email input */}
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Email Address
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            placeholder="Enter your email address"
                                            className="block w-full py-4 px-4 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.email.message?.toString()}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            {...register("phoneNumber", {
                                                required: "Phone number is required",
                                            })}
                                            placeholder="Enter your phone number"
                                            className="block w-full py-4 px-4 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.email.message?.toString()}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Password input */}
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2.5 relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters",
                                                },
                                            })}
                                            placeholder="Enter your password"
                                            className="block w-full py-4 px-4 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                                        >
                                            {showPassword ? <BiShow size={20} /> : <BiHide size={20} />}
                                        </button>
                                        {errors.password && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.password.message?.toString()}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 px-4 text-white bg-orange-500 rounded-md  focus:ring-2 "
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpSection;