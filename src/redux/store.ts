import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Feature/productSlice'

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from './storage'
const persistConfig = {
    key: 'product',
    storage,
}

const persistedReducer = persistReducer(persistConfig, productSlice)

export const makeStore = () => {
    return configureStore({
        reducer: {
            product: persistedReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']