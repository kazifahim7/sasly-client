import { Transaction } from "@/types/product";
import ChangeStatus from "./ChageSatus";


const SalesTable = ({ data }: { data: Transaction[] }) => {
    return (
        <div className="p-6 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4">Transactions</h2>
            {data.length === 0 ? (
                <p className="text-center text-gray-500">No data available</p>
            ) : (
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>Buyer</th>
                            <th>Seller</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((transaction) => (
                            <tr key={transaction._id}>
                                <td>{transaction.buyerID.name}</td>
                                <td>{transaction.sellerID.name}</td>
                                <td>{transaction.itemID.title}</td>
                                <td>${transaction.itemID.price}</td>
                                <td
                                    className={`${transaction.status === "pending"
                                            ? "text-yellow-500"
                                            : "text-green-500"
                                        }`}
                                >
                                    {transaction.status}
                                </td>
                                <td>
                                    <ChangeStatus
                                        status={transaction.status}
                                        id={transaction._id}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SalesTable;
