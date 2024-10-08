import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { RiMenu3Fill } from "react-icons/ri";

import { Hyperlink } from "@/lib/interfaces";
import logoDapoerSariwangi from "../../assets/logo-dsw.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "../ui/sheet";

export default function Sidebar({ scrolled, menuList }: { scrolled: boolean, menuList: Hyperlink[] }) {
  const currentPath = usePathname();
  
  return (
    <Fragment>
      <Sheet>
        <SheetTrigger className="lg:hidden text-2xl p-1.5 aspect-square rounded-full border border-white">
          <RiMenu3Fill className={`${scrolled ? "text-accent" : "text-white"}`} />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-center gap-16">
          <SheetHeader>
            <Link href="/" className="block h-14">
              <Image
                src={logoDapoerSariwangi}
                alt="Dapoer Sariwangi"
                className="h-full w-fit"
              />
            </Link>
          </SheetHeader>
          <ul className="text-center space-y-6">
            {menuList?.map(({ id, path }: Hyperlink) => (
              <li
                key={id}
                className={`uppercase font-semibold hover:text-accent transition-all duration-300 ${path === currentPath && "border-b-2 border-accent"}`}
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