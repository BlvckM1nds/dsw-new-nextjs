import { Fragment } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader
} from "../ui/sheet";
import { Hyperlink } from "@/lib/interfaces";
import logoDapoerSariwangi from "../../assets/logo-dsw.png";

export default function Sidebar({ scrolled, menuList }: { scrolled: boolean, menuList: Hyperlink[] }) {
  return (
    <Fragment>
      <Sheet>
        <SheetTrigger className="lg:hidden text-2xl p-1.5 aspect-square rounded-full border border-white">
          <RiMenu3Fill className={`${scrolled ? "text-accent" : "text-white"}`} />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-center gap-16">
          <SheetHeader>
            <Link href="/" className="block h-14">
              <img
                src={logoDapoerSariwangi.src}
                alt="Dapoer Sariwangi"
                className="h-full"
              />
            </Link>
          </SheetHeader>
          <ul className="text-center space-y-6">
            {menuList?.map(({ id, path }: Hyperlink) => (
              <li
                key={id}
                className={`uppercase font-semibold hover:text-secondary transition-all duration-300 ${path === "?" && "text-secondary"}`}
              >
                <Link href={path}>{id}</Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};