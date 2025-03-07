"use client"
import { deleteProduct, selectAllProducts } from "@/redux/Feature/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";


const CartPage = () => {
    const allProduct = useAppSelector(selectAllProducts)
    const dispatch=useAppDispatch()
    const handleDelete=(id:string)=>{
        dispatch(deleteProduct(id))
    }
    if(allProduct.length===0){
        return <div className="text-center font-bold justify-center mt-56 capitalize text-red-400">data is empty</div>
    }
    return (
        <div className="container mx-auto my-10">
            <div className="flex flex-col  p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y dark:divide-gray-300">
                    {allProduct.map((product) => <li key={product._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <Image height={250} width={250} className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={product.images} alt="Polaroid camera" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.title}</h3>
                                        <p className="text-sm dark:text-gray-600">{product.status}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">{product.price} TK</p>
                                    </div>
                                </div>
                                <div className="flex text-sm divide-x">
                                    <button onClick={() => handleDelete(product._id)} type="button" className="flex cursor-pointer items-center px-2 py-1 pl-0 space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                            <rect width="32" height="200" x="168" y="216"></rect>
                                            <rect width="32" height="200" x="240" y="216"></rect>
                                            <rect width="32" height="200" x="312" y="216"></rect>
                                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                        </svg>
                                        <span>Remove</span>
                                    </button>
                                    {product.status === 'sold' ? <div className="text-red-500 font-bold ml-2">sold</div> : <Link href={`/product/cart/${product._id}`} type="button" className=" btn bg-orange-400  ml-2 flex items-center px-2 py-1 space-x-1">

                                        <span>Buy now</span>
                                    </Link>}
                                </div>
                            </div>

                        </div>
                    </li>)}
                  
                   
                </ul>
             
              
            </div>
        </div>
    );
};

export default CartPage;