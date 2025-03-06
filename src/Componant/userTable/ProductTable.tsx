/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { deleteProduct } from "@/service/listing";
import { ProductType } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const ProductTable = ({ products }: { products: ProductType[] }) => {
    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this product?")) return;

        const toastId = toast.loading("deleting...");
        try {
            const res = await deleteProduct(id);

            if (res.success) {
                toast.success(res.message, { id: toastId });
            } else {
                toast.error(res.message, { id: toastId });
            }
        } catch (error: any) {
            toast.error(error?.message, { id: toastId });
        }
    };

    return (
        <div className="overflow-x-auto p-4">
            {products.length === 0 ? (
                <p className="text-center text-gray-500">No data available</p>
            ) : (
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.price} BDT</td>
                                <td>{product.condition}</td>
                                <td>{product.category}</td>
                                <td>
                                    <Image
                                        height={50}
                                        width={50}
                                        src={product.images}
                                        alt={product.title}
                                        className="w-16 h-16 rounded-md"
                                    />
                                </td>
                                <td>
                                    <Link href={`/dashboard/user/product/${product._id}`}>
                                        <button className="btn btn-sm btn-info mr-2">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-sm btn-error">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProductTable;
