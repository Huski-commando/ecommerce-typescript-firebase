import { Link } from "react-router-dom";
import headerLogo from "../assets/logo.svg";
import headerLogoDark from "../assets/logo1.png";

export const Logo = () => (
  <Link to="/" className="w-28">
    <img
      src={headerLogo}
      alt="logo"
      className="w-full h-full object-cover block dark:hidden"
    />
    <img
      src={headerLogoDark}
      alt="logo"
      className="w-full h-full object-cover hidden dark:block"
    />
  </Link>
);
