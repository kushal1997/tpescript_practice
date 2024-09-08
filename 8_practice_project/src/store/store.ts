import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "./slices/booking_session";

export const store =configureStore({
    reducer:{
        booked_session:sessionSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;