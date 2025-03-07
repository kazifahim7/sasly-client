import Checkout from "@/Componant/ui/Checkout";
import { singleProduct } from "@/service/listing";



const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const result = await singleProduct(id)

    console.log(result.data)


   
    return (
        <div>
            <Checkout item={result?.data  }></Checkout>
        </div>
    );
};

export default page;