import { ProductType } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface ProductState {
    product: ProductType[]; 
}

// Initial state
const initialState: ProductState = {
    product: [],
};

// Create slice
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      
        addProduct: (state, action: PayloadAction<ProductType>) => {
          
            const isAlreadyExists = state.product.some(item => item._id === action.payload._id);
            if (!isAlreadyExists) {
                state.product = [...state.product, action.payload]; 
            }
        },

        // Remove product by ID
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.product = state.product.filter(item => item._id !== action.payload);
        },
    },
});

// Selector to get all products
export const selectAllProducts = (state: RootState) => state.product.product;

// Export actions and reducer
export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
