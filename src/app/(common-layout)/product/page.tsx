"use client"

import Card from "@/Componant/reuseable/Card";
import { ProductType } from "@/types/product";

import { useEffect, useState } from "react";

import { FaSearch, FaUndo } from "react-icons/fa";

const ProductPage = () => {
    const [products, setProduct] = useState<ProductType[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);


    useEffect(() => {
        const url = `https://assignment-6-server-ivory.vercel.app/api/v1/listing/listings?searchTerm=${searchTerm}` +
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
                            <Card key={product._id} product={product}></Card>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
