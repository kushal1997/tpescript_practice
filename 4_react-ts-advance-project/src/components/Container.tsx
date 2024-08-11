import {
  type PropsWithChildren,
  type ElementType,
  type FC,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;
const Container = <C extends ElementType>({
  as,
  children,
  ...props
}: PropsWithChildren<ContainerProps<C>>): JSX.Element => {
  const Container = as || "div";
  return (
    <>
      <Container {...props}>{children}</Container>
    </>
  );
};

export default Container;
