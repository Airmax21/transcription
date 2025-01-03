import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slicers/auth.slicer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistAuthConfig = {
    key: 'auth',
    storage
}

const persistedAuth = persistReducer(persistAuthConfig, authSlice)

export const store = configureStore({
    reducer: {
        auth: persistedAuth
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;