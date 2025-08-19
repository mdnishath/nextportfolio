"use client";
import Link from "next/link";
import Container from "./Container";
import Menubutton from "../ui/MenuButton";
import Image from "next/image";
import { ModeToggle } from "../ui/ModeToggle";
import SidbarMenu from "../ui/SidbarMenu";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* <div className=" text-xl font-bold">NISHATH</div> */}
          <Image src={"/11.png"} alt="Logo" height={80} width={200} />
        </Link>
        <div className="flex items-center gap-6">
          <ul className="sm:flex gap-6 items-center justify-end hidden">
            <li>
              <Link className="hover:text-orange-600" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-600" href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-600" href={"/work"}>
                Work
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-600" href={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex gap-3 items-center">
            <SidbarMenu />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
