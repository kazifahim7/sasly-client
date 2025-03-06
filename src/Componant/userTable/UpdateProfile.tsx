"use client"
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { UserType } from "@/types/product";
import { toast } from "sonner";
import { updateProfile } from "@/service/Auth";

const UpdateProfile = ({ data }: { data: UserType }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Setup react hook form
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    // Pre-fill the form fields with the data passed in as props
    const handleOpenModal = () => {
        setValue("name", data.name); // Pre-fill name
        setValue("phoneNumber", data.phoneNumber); // Pre-fill phone number
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const onSubmit : SubmitHandler<FieldValues> = async(formData) => {
        // Handle form submission here (e.g., call an API to update user profile)
        console.log(formData , data._id);
        const id = toast.loading("loading...")
        try {
            const result = await updateProfile(data._id,formData)
            console.log(result)

            if (result.success) {
                toast.success(result.message, { id })
              
                handleCloseModal(); // Close modal after submission
            } else {
                toast.error(result.message, { id })
            }






            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message || "something went wrong", { id })
        }






       
    };

    return (
        <div>
            {/* Button to open modal */}
            <button
                className="btn btn-sm btn-primary"
                onClick={handleOpenModal}
            >
                Edit Profile
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-10 bg-gray-200 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Name Field */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                                {errors.name && <p className="text-red-500 text-xs">{errors.name.message?.toString()}</p>}
                            </div>

                            {/* Phone Number Field */}
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    id="phoneNumber"
                                    type="text"
                                    {...register("phoneNumber", { required: "Phone number is required" })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                                {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber.message?.toString()}</p>}
                            </div>

                            {/* Modal Footer */}
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="btn btn-sm btn-secondary"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateProfile;
