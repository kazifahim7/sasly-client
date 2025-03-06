/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { updateTransactionStatus } from "@/service/transaction";
import { toast } from "sonner";

const ChangeStatus = ({ id, status }:{id:string , status:string}) => {

    const handleUpdateStatus = async (id: string) => {
        if (!confirm("Are you sure you want to change the status of this transaction?")) {
            return; 
        }

        const toastId = toast.loading("Updating..."); 

        try {
            const res = await updateTransactionStatus(id); 

            if (res.success) {
                toast.success(res.message, { id: toastId }); 
            } else {
                toast.error(res.message, { id: toastId }); 
            }
        } catch (error: any) {
            toast.error(error.message, { id: toastId }); 
        }
    };

   
    return (
        <button
        disabled={status==="complete"}
            onClick={()=>handleUpdateStatus(id)}
            className="btn btn-primary btn-sm"
        >
            Update Status
        </button>
    );
};

export default ChangeStatus;