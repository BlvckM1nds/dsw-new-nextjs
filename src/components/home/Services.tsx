import Link from "next/link";
import { FaBowlFood } from "react-icons/fa6";

import { Service } from "@/lib/types";
import Wrapper from "../common/Wrapper";
import Container from "../common/Container";
import { Button } from "../ui/button";
import bgFavorite from "../../assets/cooks-bw.jpg";

const services: Service[] = [
  { id: "dine-in", label: "Dine In", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores possimus repudiandae, expedita tenetur labore recusandae?", icon: <FaBowlFood /> },
  { id: "catering", label: "Catering", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores possimus repudiandae, expedita tenetur labore recusandae?", icon: <FaBowlFood /> },
  { id: "vip", label: "VIP Rooms", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores possimus repudiandae, expedita tenetur labore recusandae?", icon: <FaBowlFood /> }
];

export default function Services() {
  return (
    <Wrapper id="home-services" className="bg-cream pb-20 lg:pb-28">
      {/* Picture Overlay */}
      <div className="pt-20 pb-40 lg:pt-28 lg:pb-56 bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${bgFavorite.src})` }}>
        <h1 className="font-rabona font-bold tracking-wide text-center text-4xl lg:text-5xl text-white">Layanan Kami</h1>
      </div>
      <Container className="-mt-20 lg:-mt-28 space-y-16">
        {/* Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map(({ id, label, description, icon }: Service) => (
            <div key={id} className="flex flex-col items-center gap-4 bg-white rounded-lg p-8 md:p-6 shadow-lg duration-300 hover:shadow-2xl">
              <span className="text-accent text-5xl lg:text-7xl">
                {icon}
              </span>
              <div className="space-y-1.5 text-center">
                <h4 className="text-xl text-primary font-bold">{label}</h4>
                <p className="text-sm text-primary/60 md:text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reservation */}
        <div className="text-center">
          <h3 className="font-rabona font-bold tracking-wide text-3xl text-primary leading-none mb-4">Reservasi?</h3>
          <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iusto.</p>
          <Button>
            <Link href="/">Reservasi Tempat</Link>
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};