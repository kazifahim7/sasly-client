export const dynamic = "force-dynamic";
import PurchasesTable from "@/Componant/userTable/PurchasesTable";
import { myPurchases } from "@/service/transaction";


const Purchases = async() => {
    const data = await myPurchases()

    return (
        <div>
            <PurchasesTable data={data.data}></PurchasesTable>
        </div>
    );
};

export default Purchases;