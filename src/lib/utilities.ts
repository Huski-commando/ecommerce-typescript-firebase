import { nanoid } from "nanoid";
import { IoHome } from "react-icons/io5";
import {
  MdContactPhone,
  MdOutlineShoppingCart,
  MdOutlineLogin,
} from "react-icons/md";

export const navItems = [
  { id: nanoid(), name: "Home", navLinks: "/", Icon: IoHome },
  {
    id: nanoid(),
    name: "Contact",
    navLinks: "/contact",
    Icon: MdContactPhone,
  },
  {
    id: nanoid(),
    name: "Cart",
    navLinks: "/cart",
    Icon: MdOutlineShoppingCart,
  },
];
