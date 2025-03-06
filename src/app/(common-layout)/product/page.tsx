"use client"

import { ProductType } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaSearch, FaUndo } from "react-icons/fa";

const ProductPage = () => {
    const [products, setProduct] = useState<ProductType[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");  
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

    
    useEffect(() => {
        const url = `http://localhost:5000/api/v1/listing/listings?searchTerm=${searchTerm}` +
            (selectedCategory ? `&category=${selectedCategory}` : '');  

        fetch(url, { cache: "no-store" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data.data);
                setFilteredProducts(data.data);  
            });
    }, [searchTerm, selectedCategory]);  

    const handleReset = () => {
        setSearchTerm("");
        setSelectedCategory("");  
        setFilteredProducts(products);  
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

 

    return (
        <div>
            <div className="my-6 container mx-auto">
                <h1 className="text-center font-bold text-3xl my-3">ALL Products</h1>
                <p className="text-center">We offer the finest quality stationery, tailored to meet your every need.</p>

                {/* Search and Filters */}
                <div className="flex justify-between items-center my-6">
                    <div className="flex space-x-4">
                        <div className="flex items-center border p-2 rounded">
                            <input
                                type="text"
                                placeholder="Search Products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="outline-none p-2"
                            />
                            <FaSearch className="cursor-pointer text-xl" />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="border p-2 rounded"
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Books">Books</option>
                        </select>
                    </div>
                    <button
                        onClick={handleReset}
                        className="flex items-center border p-2 rounded text-red-600 hover:bg-red-100"
                    >
                        <FaUndo className="mr-2" /> Reset
                    </button>
                </div>

                {/* Display products */}
                <div className="grid grid-cols-1 justify-center items-center  md:grid-cols-2 lg:grid-cols-3 gap-6 my-32">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center col-span-full">Data Not Found</div>
                    ) : (
                        filteredProducts.map((product: ProductType) => (
                            <div key={product._id} className="card bg-base-100 m-4 shadow-sm ">
                                <figure>
                                    <Image
                                        height={400}
                                        width={400}
                                        src={product.images}
                                        alt="Product Image"
                                        className="h-[300px]"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {product.title}
                                        <div className="badge badge-secondary w-1/2 text-xs">{product.condition}</div>
                                    </h2>
                                    <p>{product.description.slice(0, 60)}...</p>
                                    <p>Price: {product.price} TK</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline cursor-pointer">Save</div>
                                        <Link href={`/product/${product._id}`} className="badge badge-outline cursor-pointer">Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
