import { Fragment } from "react";
import Link from "next/link";

import { Hyperlink } from "@/lib/types";

export default function Header({ scrolled, menuList }: { scrolled: boolean, menuList: Hyperlink[] }) {
  return (
    <Fragment>
      <ul className={`hidden lg:flex ${scrolled ? "text-primary" : "text-white group-hover:text-primary"} tracking-wider gap-12`}>
        {menuList?.map(({ id, path }: Hyperlink) => (
          <li
            key={id}
            className={`uppercase font-semibold hover:text-secondary hover:-translate-y-0.5 transition-all duration-300 ${path === "?" && "text-secondary"}`}
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