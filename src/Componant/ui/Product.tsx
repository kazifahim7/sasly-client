import { ProductType } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const Product = async() => {
    const res = await fetch("http://localhost:5000/api/v1/listing/listings",{next:{revalidate:10}})
    const data = await res.json()
    console.log(data.data)
    return (
        <div className="my-6">
            <h1 className="text-center font-bold text-3xl my-3">Product</h1>
            <p className="text-center">We offer the finest quality stationery, tailored to meet your every need.</p>

            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-6 my-32">
            {
                    data?.data?.slice(0, 6).map((product: ProductType) => <div key={product._id} className="card m-4 bg-base-100 shadow-sm ">
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
                            <p>{product.description.slice(0,60)}...</p>
                            <p>price :  {product.price} TK</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline cursor-pointer">Save</div>
                                <Link href={`/product/${product._id}`} className="badge badge-outline cursor-pointer">Details</Link>
                            </div>
                        </div>
                    </div>)
            }
          </div>
            
        </div>
    );
};

export default Product;