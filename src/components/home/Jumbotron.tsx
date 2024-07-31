import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

import Wrapper from "../common/Wrapper";
import bgJumbo from "../../assets/vegetables.jpg";

export default function Jumbotron() {
  return (
    <Wrapper id="hero" className="min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${bgJumbo.src})` }}>
      <div className="flex flex-col gap-2 items-center text-white">
        <h1 className="font-greatVibes text-4xl sm:text-6xl md:text-7xl xl:text-8xl">Selera Keluarga Anda</h1>
        <h4 className="text-base sm:text-lg md:text-xl xl:text-2xl mb-2 md:mb-4">telah hadir sejak 2002</h4>
        <Link href="/resto">
          <Button className="w-fit">Explore Menu</Button>
        </Link>
      </div>
    </Wrapper>
  );
};