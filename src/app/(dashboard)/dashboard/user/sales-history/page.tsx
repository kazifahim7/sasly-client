export const dynamic = "force-dynamic";
import SalesTable from "@/Componant/userTable/SalesTable";
import { mySales } from "@/service/transaction";

const MySales = async() => {
    const data = await mySales()
  
    return (
        <div>
           <SalesTable data={data.data}></SalesTable>
        </div>
    );
};

export default MySales;