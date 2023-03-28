import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootSlice";

//  The Store is a temporary database and we will use this to say which components have access

export const store = configureStore({
    reducer,
    devTools: true,
})