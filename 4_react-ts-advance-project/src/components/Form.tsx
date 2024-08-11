import { type ComponentPropsWithoutRef,type  FC,type  FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};
const Form: FC<FormProps> = ({ onSave, children, ...otherProps }) => {
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);
    onSave(data);
    // console.log(data);
  };
  return (
    <>
      <form onSubmit={handelSubmit} {...otherProps}>
        {children}
      </form>
    </>
  );
};

export default Form;
