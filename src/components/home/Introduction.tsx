import Image from "next/image";

import sampleImage from "../../assets/vegetables.jpg";
import Wrapper from "../common/Wrapper";
import { Button } from "../ui/button";

export default function Introduction() {
  return (
    <Wrapper id="home-introduction" className="bg-light py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-8 lg:gap-14">
          <div className="flex-1 space-y-3.5 lg:space-y-5 text-center lg:text-left">
            <h4 className="uppercase font-semibold text-accent text-sm">Tentang Kami</h4>
            <h2 className="font-rabona font-bold text-3xl lg:text-5xl text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, rem!</h2>
            <p className="text-sm lg:text-lg text-primary/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic adipisci beatae voluptatem voluptas pariatur iusto consequuntur optio assumenda, perferendis, eos illum quae reiciendis cumque nostrum voluptatum laboriosam sunt libero sequi. Est et praesentium ratione!</p>
            <Button>Tentang Kami</Button>
          </div>
          <figure className="flex-1" style={{ filter: "drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.5))" }}>
            <Image src={sampleImage} alt="Menu Dapoer Sariwangi" />
          </figure>
        </div>
      </div>
    </Wrapper>
  );
};