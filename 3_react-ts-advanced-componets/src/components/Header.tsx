import { type FC, type PropsWithChildren } from "react";
import {type HeaderPropsOfImage } from "../types";



type HaederProps = PropsWithChildren<{ image: HeaderPropsOfImage }>;
const Header: FC<HaederProps> = ({ image, children }) => {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
