import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/search';

export const store = configureStore({
    reducer: {
        search: searchReducer,
    },
});

export type AppDispatch = typeof store.dispatch | any;
export type RootState = ReturnType<typeof store.getState>;