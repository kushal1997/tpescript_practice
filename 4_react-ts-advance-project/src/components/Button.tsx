import {
  type ComponentPropsWithoutRef,
  type FC,
  type PropsWithChildren,
} from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "link";
} & ComponentPropsWithoutRef<"a">;

const Button: FC<PropsWithChildren<ButtonProps | AnchorProps>> = (props) => {
  if (props.el === "button") {
    return (
      <button className="button" {...props}>
        {props.children}
      </button>
    );
  }
  return (
    <a className="button" {...props}>
      {props.children}
    </a>
  );
};

export default Button;
