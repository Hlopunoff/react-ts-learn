import { configureStore } from "@reduxjs/toolkit";
import reports from '../slices/reportSlice';

const store = configureStore({
    reducer: {reports},
    devTools: process.env.NODE_ENV !== "production" ? true : false,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;