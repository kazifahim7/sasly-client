export type UserType = {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    role: "user" | "admin";
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type ProductType = {
    _id: string;
    title: string;
    description: string;
    price: string;
    condition: string;
    address: string;
    category: string;
    images: string;
    userID: UserType | string;
    status: "available" | "sold";
    createdAt: string;
    updatedAt: string;
    __v: number;
};



export type Transaction ={
    _id: string;
    buyerID: UserType;
    sellerID: UserType;
    itemID: ProductType;
    status: "pending" | "completed"  
    address: string;
    tranId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
