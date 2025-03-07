"use client"
import { addProduct, selectAllProducts } from "@/redux/Feature/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ProductType } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";


const Card = ({ product }: { product: ProductType }) => {
    const dispatch = useAppDispatch()
    const cartProduct = useAppSelector(selectAllProducts)
  

    const handleAddProduct = (item: ProductType) => {
        console.log(item)
        const isExists= cartProduct.find(items=>items._id === item._id)
        if(isExists){
            toast.warning("already added")
            return;
        }
        dispatch(addProduct(item))
        toast.success("product added in favorite section")

    }
    return (
        <div className="card m-4 bg-base-100 shadow-sm ">
            <figure>
                <Image
                    height={400}
                    width={400}
                    src={product.images}
                    alt="Shoes" className=" h-[300px]" />

            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary w-1/2 text-xs" >{product.condition}</div>
                </h2>
                <p>{product.description.slice(0, 60)}...</p>
                <p>price :  {product.price} TK</p>
                <div className="card-actions justify-end">
                    <div onClick={() => handleAddProduct(product)} className="badge badge-outline cursor-pointer">Save</div>
                    <Link href={`/product/${product._id}`} className="badge badge-outline cursor-pointer">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;