// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navItems } from "@/lib/utilities";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/themeSlice/themeSlice";

import Navbar from "./Navbar";

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

  return (
    <header className={scrolledNavbar}>
      <nav className="max-w-7xl px-6 xl:px-0 mx-auto flex items-center justify-between h-full">
        <Logo />

        <div className="flex gap-3">
          <div className="hidden sm:flex gap-3">
            {navItems.map((navItem) => {
              const { id, name, navLinks, Icon } = navItem;
              return (
                <div key={id} className="flex">
                  <Navbar url={navLinks} text={name} Icon={Icon} />
                </div>
              );
            })}
          </div>

          <Button
            className="w-12 h-12"
            onClick={() => dispatch(toggleTheme())}
            variant="outline"
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>

          <div className="flex sm:hidden">Mb</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
