import {
  type ComponentPropsWithoutRef,
  type FC,
  type PropsWithChildren,
} from "react";

// type ButtonProps = {
//   el: "button";
// } & ComponentPropsWithoutRef<"button">;

// type AnchorProps = {
//   el: "link";
// } & ComponentPropsWithoutRef<"a">;

//rather wrting el we can directly do like this too
type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };

type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

// Type Guard to determine if props are for an anchor
const isAnchorProps = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  //type predicate feature
  return "href" in props;
};
const Button: FC<PropsWithChildren<ButtonProps | AnchorProps>> = (props) => {
  if (isAnchorProps(props)) {
    return (
      <a className="button" {...props}>
        {props.children}
      </a>
    );
  }

  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
