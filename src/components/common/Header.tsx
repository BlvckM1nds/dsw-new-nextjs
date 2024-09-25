"use client";

import Link from "next/link";
import { Fragment } from "react";

import { Hyperlink } from "@/lib/interfaces";
import { usePathname } from "next/navigation";

export default function Header({ scrolled, menuList }: { scrolled: boolean, menuList: Hyperlink[] }) {
  const currentPath = usePathname();
  
  return (
    <Fragment>
      <ul className={`hidden lg:flex ${scrolled ? "text-primary" : "text-white group-hover:text-primary"} tracking-wider gap-12`}>
        {menuList?.map(({ id, path }: Hyperlink) => (
          <li
            key={id}
            className={`uppercase font-semibold hover:text-accent transition-all duration-300 ${path === currentPath && "border-b-2 border-secondary"}`}
          >
            <Link href={path}>
              {id}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};