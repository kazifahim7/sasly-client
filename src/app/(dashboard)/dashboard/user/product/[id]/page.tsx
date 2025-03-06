import UpdateProduct from "@/Componant/userTable/UpdateTable";
import { detailsProduct } from "@/service/listing";


const Update = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const data = await detailsProduct(id)
    console.log(data)
    return (
        <div>
            <UpdateProduct product={data.data}></UpdateProduct>
        </div>
    );
};

export default Update;