import { ProductType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
    product: ProductType[]
}

const initialState: Product = {
    product: []

}


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.product = action.payload
        },
        deleteProduct: (state, action) => {
            state.product = state.product.filter((item) => item._id !== action.payload)
        }
    }
})

//! all product
export const allProduct = (state: RootState) => state.product.product;


export const { addProduct, deleteProduct } = productSlice.actions



export default productSlice.reducer