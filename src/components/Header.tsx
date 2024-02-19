// import { useEffect, useState } from "react";

import { Suspense, lazy, useEffect, useState } from "react";
import { Logo } from "./Logo";

import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/themeSlice/themeSlice";

import { navItems } from "@/lib/utilities";
import { NavLink } from "react-router-dom";
// import MobileNav from "./MobileNav";
const MobileNav = lazy(() => import("./MobileNav"));
import { MdOutlineLogin } from "react-icons/md";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  // console.log(scrolled);
  function handleScroll() {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  //  Add event listener when the component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // clean up - remove event listener when the component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolledNavbar = scrolled
    ? "w-full fixed top-0 z-10 left-0  transition-all bg-slate-200 dark:bg-[#192644] shadow-md duration-300 h-16"
    : "w-full fixed top-0 z-10 transition-all bg-slate-200 dark:bg-[#192644] duration-300 h-16";

  const activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `text-red-500 flex gap-1 items-center px-2 py-1`
      : `text-gray-500 flex gap-1 items-center px-2 py-1`;

  return (
    <header className={scrolledNavbar}>
      <nav className="max-w-7xl px-6 xl:px-0 mx-auto flex items-center justify-between h-full">
        <Logo />

        <div className="flex gap-3">
          <div className="hidden sm:flex gap-3 items-center">
            {navItems.map((navItem) => {
              const { id, name, Icon, navLinks } = navItem;

              return (
                <NavLink to={navLinks} key={id} className={activeClass}>
                  <Icon /> {name}
                </NavLink>
              );
            })}
            <NavLink to="/login" className={activeClass}>
              <MdOutlineLogin />
              Login
            </NavLink>
          </div>

          <Button
            className="w-12 h-12"
            onClick={() => dispatch(toggleTheme())}
            variant="outline"
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>

          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="flex sm:hidden">
              <MobileNav />
            </div>
          </Suspense>
        </div>
      </nav>
    </header>
  );
};

export default Header;
