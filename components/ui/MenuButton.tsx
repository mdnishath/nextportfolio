"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "./button";
import { toggleMenu } from "@/redux/slices/menuSlice";
import { TbMenuDeep } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";

export default function Menubutton() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menu.isOpen);
  console.log(isOpen);

  return (
    <div>
      <button
        className="bg-transparent text-orange-500 text-2xl"
        onClick={() => dispatch(toggleMenu())}
      >
        {isOpen ? <IoCloseSharp /> : <TbMenuDeep />}
      </button>
    </div>
  );
}
