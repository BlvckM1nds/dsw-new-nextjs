import Link from "next/link";
import { Great_Vibes } from "next/font/google";

import Wrapper from "../common/Wrapper";
import { Button } from "../ui/button";
import bgJumbo from "../../assets/vegetables.jpg";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"]
});

export default function Jumbotron() {
  return (
    <Wrapper id="home-jumbotron" className="min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${bgJumbo.src})` }}>
      <div className="flex flex-col gap-2 items-center text-white">
        <h1 className={`${greatVibes.className} text-4xl sm:text-6xl md:text-7xl xl:text-8xl`}>Selera Keluarga Anda</h1>
        <h4 className="text-base sm:text-lg md:text-xl xl:text-2xl mb-2 md:mb-4">telah hadir sejak 2002</h4>
        <Link href="/resto">
          <Button className="w-fit">Explore Menu</Button>
        </Link>
      </div>
    </Wrapper>
  );
};