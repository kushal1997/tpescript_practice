import { ComponentPropsWithoutRef, FC } from "react";

interface InputProps {
  label: string;
  id: string;
}

// Use Omit to remove 'id' from ComponentPropsWithoutRef<'input'>
type NativeInputProps = Omit<ComponentPropsWithoutRef<"input">, "id">;

// Combine InputProps with the omitted input props
interface MergedInputProps extends InputProps, NativeInputProps {}

const Input: FC<MergedInputProps> = ({ label, id, ...inputProps }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} {...inputProps} />
    </p>
  );
};

export default Input;
