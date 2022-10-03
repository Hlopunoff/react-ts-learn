import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {},
    devTools: process.env.NODE_ENV !== "production" ? true : false,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;