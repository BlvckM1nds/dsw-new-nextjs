"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Hyperlink } from "@/lib/interfaces";
import Header from "./Header";
import Sidebar from "./Sidebar";
import logoDapoerSariwangi from "../../assets/logo-dsw.png";

const links: Hyperlink[] = [
  { id: "home", path: "/" },
  { id: "resto", path: "/resto" },
  { id: "catering", path: "/catering" },
  { id: "about", path: "/about" },
  { id: "contact", path: "/contact" },
];

export default function Navigations() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`py-3 fixed top-0 w-full group transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "lg:py-6 bg-transparent"} hover:lg:bg-white z-[990]`}>
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="block h-10 lg:h-12 lg:block">
          <img
            src={logoDapoerSariwangi.src}
            alt="Dapoer Sariwangi"
            className="h-full"
          />
        </Link>
        {/* Desktop Profile */}
        <Header scrolled={scrolled} menuList={links} />
        {/* Mobile Navbar */}
        <div className="lg:hidden ml-auto">
          <Sidebar scrolled={scrolled} menuList={links} />
        </div>
        {/* Find us button */}
        <Button className="hidden lg:block justify-end">Find Us</Button>
      </nav>
    </header>
  );
};