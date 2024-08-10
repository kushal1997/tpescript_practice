import { ComponentPropsWithoutRef, FC, forwardRef } from "react";

interface InputProps {
  label: string;
  id: string;
}

// Use Omit to remove 'id' from ComponentPropsWithoutRef<'input'>
type NativeInputProps = Omit<ComponentPropsWithoutRef<"input">, "id">;

// Combine InputProps with the omitted input props
interface MergedInputProps extends InputProps, NativeInputProps {}

//within forward ref first type is for ref and second for the props
const Forward_Ref_Input = forwardRef<HTMLInputElement, MergedInputProps>(
  ({ label, id, ...inputProps }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input name={id} id={id} {...inputProps} ref={ref} />
      </p>
    );
  }
);

export default Forward_Ref_Input;
