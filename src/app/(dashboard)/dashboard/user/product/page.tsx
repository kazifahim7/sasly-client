export const dynamic = "force-dynamic";

import ProductTable from "@/Componant/userTable/ProductTable";
import { myProduct } from "@/service/listing";



const MyProduct = async () => {
    const {data} = await myProduct()

    
  




    return (
        <div>
            <ProductTable products={data || []}></ProductTable>
        </div>
    );
};

export default MyProduct;