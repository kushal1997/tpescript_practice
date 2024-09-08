import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SessionDetail = {
  id: string;
  title: string;
  summary: string;
  date: string;
  name: string;
  email: string;
};
type SessionState = {
  sessions: SessionDetail[];
};
const initialState: SessionState = {
  sessions: [],
};
export const sessionSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    bookSession(state, action: PayloadAction<SessionDetail>) {
      //   console.log("bookSession", action.payload);
      const sessionExists = state.sessions.some(
        (session) => session.id === action.payload.id
      );

      if (sessionExists) alert("You have already  booked this session");
      else {
        state.sessions.push({ ...action.payload });
      }
    },
    removeSession(state, action: PayloadAction<string>) {
      const sessionIndex = state.sessions.findIndex(
        (state) => state.id === action.payload
      );
      state.sessions.splice(sessionIndex, 1);
    },
  },
});

export const { bookSession, removeSession } = sessionSlice.actions;
