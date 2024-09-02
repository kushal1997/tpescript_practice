import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunc = () => AppDispatch;
export const useCartDispatch: DispatchFunc = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
