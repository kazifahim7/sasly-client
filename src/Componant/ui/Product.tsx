import { ProductType } from "@/types/product";
import Card from "../reuseable/Card";


const Product = async () => {
    const res = await fetch("https://assignment-6-server-ivory.vercel.app/api/v1/listing/listings", { next: { revalidate: 10 } })
    const data = await res.json()
    console.log(data.data)
    return (
        <div className="my-6">
            <h1 className="text-center font-bold text-3xl my-3">Product</h1>
            <p className="text-center">We offer the finest quality stationery, tailored to meet your every need.</p>

            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-6 my-32">
                {
                    data?.data?.slice(0, 6).map((product: ProductType) => <Card key={product._id} product={product} ></Card>)
                }
            </div>

        </div>
    );
};

export default Product;