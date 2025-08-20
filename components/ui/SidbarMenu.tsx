import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { TbMenuDeep } from "react-icons/tb";

const SidbarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CgMenuGridR className="text-3xl text-orange-600 cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-5">
          <ul className="flex flex-col gap-3">
            <li className="hover:bg-orange-600 hover:text-white p-2">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:bg-orange-600 hover:text-white p-2">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:bg-orange-600 hover:text-white p-2">
              <Link href={"/work"}>Work</Link>
            </li>
            <li className="hover:bg-orange-600 hover:text-white p-2">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidbarMenu;
