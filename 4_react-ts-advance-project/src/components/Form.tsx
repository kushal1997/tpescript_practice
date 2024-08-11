import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
  type FormEvent,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
};
const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("clearing");
          formRef.current?.reset();
        },
      };
    });
    const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData);
      onSave(data);
      // console.log(data);
    };
    return (
      <>
        <form onSubmit={handelSubmit} {...otherProps} ref={formRef}>
          {children}
        </form>
      </>
    );
  }
);

export default Form;
