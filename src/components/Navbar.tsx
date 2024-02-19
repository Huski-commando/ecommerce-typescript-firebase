import { memo } from "react";
import { type IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  url: string;
  text: string;
  Icon: IconType;
}

const Navbar = ({ url, text, Icon }: NavbarProps) => {
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `text-red-500 flex gap-1 items-center px-2 py-1`
      : `text-gray-500 flex gap-1 items-center px-2 py-1`;

  return (
    <NavLink to={url} className={activeClass}>
      <Icon /> {text}
    </NavLink>
  );
};

export default memo(Navbar);
