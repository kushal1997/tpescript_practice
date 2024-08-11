import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

type IconButtonProps = {
  icon: ElementType;
  onClick?: () => void;
} & ComponentPropsWithoutRef<"button">;

const IconButton = ({
  icon: Icon,
  children,
  ...otherProps
}: PropsWithChildren<IconButtonProps>) => {
  return (
    <>
      <button {...otherProps}>
        <span>
          <Icon />
        </span>
        <span>{children}</span>
      </button>
    </>
  );
};

export default IconButton;
