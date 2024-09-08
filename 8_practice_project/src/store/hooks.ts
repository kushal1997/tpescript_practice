import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunc = () => AppDispatch;
export const useSessiontDispatch: DispatchFunc = useDispatch;
export const useSessionSelector: TypedUseSelectorHook<RootState> = useSelector;