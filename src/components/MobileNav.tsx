import { navItems } from "@/lib/utilities";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { CgMenuRightAlt } from "react-icons/cg";
import headerLogoDark from "../assets/logo1.png";
import { NavLink } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { memo } from "react";

const MobileNav = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `text-red-500 flex gap-2 items-center px-2 py-1 text-lg`
      : `text-gray-300 flex gap-2 items-center px-2 py-1 text-lg w-full`;

  return (
    <Sheet>
      <SheetTrigger>
        <CgMenuRightAlt size="30" />
      </SheetTrigger>

      <SheetContent className="">
        <div className="border-b pb-6">
          <div className="w-3/4">
            <img src={headerLogoDark} alt="logo" />
          </div>
        </div>
        <div className="my-10 space-y-8 text-white flex flex-col">
          {navItems.map((navItem) => {
            const { id, name, Icon, navLinks } = navItem;
            return (
              <NavLink to={navLinks} key={id} className={activeClass}>
                <SheetClose className="flex items-center gap-2">
                  <Icon /> {name}
                </SheetClose>
              </NavLink>
            );
          })}
          <NavLink to="/login" className={activeClass}>
            <SheetClose className="flex items-center gap-2">
              <MdOutlineLogin />
              Login
            </SheetClose>
          </NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default memo(MobileNav);
