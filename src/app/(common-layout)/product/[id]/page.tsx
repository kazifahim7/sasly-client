import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const Details = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;


    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;


    if (!token) {
        return <h1>Unauthorized</h1>;
    }

    // Fetch the listing data from your API
    const res = await fetch(`https://assignment-6-server-ivory.vercel.app/api/v1/listing/listings/${id}`, {
        method: "GET",
        headers: {
            Authorization: token,
        },
    });
    const result = await res.json();
    const item = result.data || {};

    return (
        <div className="container mx-auto px-4 py-8">
            <div className=" mx-auto p-6 rounded-lg justify-center items-center grid grid-cols-1 md:grid-cols-2">
                {/* Left: Image Section */}
                <div className="flex-1 pr-6">
                    <Image
                        height={400}
                        width={400}
                        src={item.images || ''}
                        alt={item.title || ""}
                        className="w-[70%] h-auto rounded-lg object-cover hover:scale-125 duration-1000"
                    />
                </div>

                {/* Right: Details Section */}
                <div className="flex-1">
                    {/* Title & Price Section */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-semibold text-gray-800">{item.title}</h1>
                        <p className="text-2xl font-bold text-green-600">৳{item.price}</p>
                    </div>

                    {/* Category and Condition */}
                    <div className="flex space-x-6 mt-4">
                        <span className="text-sm text-gray-600">Category: <span className="font-semibold">{item.category}</span></span>
                        <span className="text-sm text-gray-600">Condition: <span className="font-semibold">{item.condition}</span></span>
                    </div>

                    {/* Description Section */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-800">Description</h3>
                        <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>

                    {/* Address and Status */}
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-600">Location: <span className="font-semibold">{item.address}</span></span>
                        <span className={`text-sm font-semibold ${item.status === 'sold' ? 'text-red-600' : 'text-blue-600'}`}>
                            {item.status === 'sold' ? 'Sold' : 'Available'}
                        </span>
                    </div>

                    {/* Timestamps */}
                    <div className="mt-4 text-sm text-gray-500">
                        <p>Created At: {new Date(item.createdAt).toLocaleDateString()}</p>
                        <p>Updated At: {new Date(item.updatedAt).toLocaleDateString()}</p>
                    </div>

                    {/* Buy Now Button */}
                    <div className="mt-6">
                        <Link href={`/product/cart/${id}`}>
                            <button
                                disabled={item.status === "sold"}
                                className={`w-full py-3 text-white font-semibold rounded-lg ${item.status === "sold" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                {item.status === "sold" ? "Sold Out" : "Buy Now"}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
