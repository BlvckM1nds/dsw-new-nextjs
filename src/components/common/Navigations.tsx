"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { links } from "@/lib/paths";
import logoDapoerSariwangi from "../../assets/logo-dsw.png";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Navigations() {
  const [scrolled, setScrolled] = useState<boolean>(false);

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
        <Link href="/" className="block h-10 lg:h-12">
          <Image
            src={logoDapoerSariwangi}
            alt="Dapoer Sariwangi"
            className="h-full w-fit"
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