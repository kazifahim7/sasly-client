import UpdateProfile from '@/Componant/userTable/UpdateProfile';
import { cookies } from 'next/headers';
import React from 'react';

const ProfilePage = async () => {
    const res = await fetch('https://assignment-6-server-ivory.vercel.app/api/v1/auth/user', {
        method: "GET",
        headers: {
            Authorization: (await cookies()).get("accessToken")!.value
        },
        next: { tags: ["profile"] }

    })
    const data = await res.json()
    return (
        <div className="max-w-4xl mx-auto p-6 mt-2 bg-white rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {data?.data?.name?.charAt(0)}
                </div>
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800">{data.data.name}</h2>
                    <p className="text-gray-500">{data.data.role}</p>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                    <div className="mt-2">
                        <p className="text-gray-600">
                            <strong>Email:</strong> {data.data.email}
                        </p>
                        <p className="text-gray-600">
                            <strong>Phone:</strong> {data.data.phoneNumber}
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Account Information</h3>
                    <div className="mt-2">
                        <p className="text-gray-600">
                            <strong>Account Status:</strong>
                            <span className={`${data.data.isBlocked ? "text-red-500" : "text-green-500"
                                } font-semibold`}>
                                {data.data.isBlocked ? "Blocked" : "Active"}
                            </span>
                        </p>
                        <p className="text-gray-600">
                            <strong>Account Created:</strong> {new Date(data.data.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600">
                            <strong>Last Updated:</strong> {new Date(data.data.updatedAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex space-x-4">
                <UpdateProfile data={data.data}></UpdateProfile>
            </div>
        </div>
    );
};

export default ProfilePage;