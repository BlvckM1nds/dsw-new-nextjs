"use client";

import { useState } from "react";
import Image from "next/image";

import { currencyConversion } from "@/utils/formatter";
import { VIPRoom } from "@/lib/interfaces";
import Wrapper from "../common/Wrapper";
import Container from "../common/Container";
import { Button } from "../ui/button";
import sampleImg from "../../assets/gurame-bakar.png";

const roomsData: VIPRoom[] = [
  {
    photo: sampleImg,
    title: "Ruang VIP Lantai 1",
    capacity: 14,
    minOrder: 800000
  },
  {
    photo: sampleImg,
    title: "Ruang VIP Lantai 2",
    capacity: 25,
    minOrder: 1500000
  },
  {
    photo: sampleImg,
    title: "Outdoor (Smoking Area)",
    capacity: 20,
    minOrder: 500000
  }
];

export default function Rooms() {
  const [hoverIndex, setHoverIndex] = useState<number>(0);

  return (
    <Wrapper id="rooms" className="bg-cream py-20 lg:py-28">
      <Container className="space-y-12">
        <div className="heading text-center">
          <h2 className="font-rabona font-bold text-accent text-4xl lg:text-5xl">Ruangan Kami</h2>
          <em className="text-sm text-primary">*S&k berlaku</em>
        </div>

        {/* Room Cards: DESKTOP */}
        <div className="hidden lg:flex lg:gap-x-2.5">
          {roomsData.map((room, index) => (
            <div
              key={`vip-${index}`}
              className={`bg-white flex items-center h-96 overflow-hidden duration-500 group ${hoverIndex === index ? "flex-[4]" : "flex-1"}`}
              onClick={() => setHoverIndex(index)}
            >
              <figure className={`h-full aspect-[3/4] xl:aspect-square ${hoverIndex !== index && "opacity-50"} group-hover:opacity-100 text-center duration-500`}>
                <Image
                  className="h-full object-cover"
                  src={room.photo}
                  alt="room"
                />
              </figure>
              <div className={`p-6 xl:p-10 w-full duration-500 ${hoverIndex === index ? "opacity-100 delay-500" : "opacity-0"}`}>
                <h3 className="text-2xl xl:text-3xl text-primary font-bold mb-2 xl:mb-3">{room.title}</h3>
                {/* S & K */}
                <div className="mb-6">
                  <h5 className="text-lg xl:text-xl text-primary font-semibold mb-2">Syarat dan Ketentuan</h5>
                  <ul>
                    <li className="flex items-center gap-2.5 text-sm xl:text-base">
                      Minimum pemesanan
                      <strong className="text-base xl:text-lg text-accent">
                        {currencyConversion("id-ID", "IDR", room.minOrder)}
                      </strong>
                    </li>
                    <li className="flex items-center gap-2.5 text-sm xl:text-base">
                      Kapasitas
                      <strong className="text-base xl:text-lg text-accent">{room.capacity} orang</strong>
                    </li>
                  </ul>
                </div>
                <Button>Reservasi</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Room Cards: MOBILE */}
        <div className="grid grid-cols-1 lg:hidden gap-8">
          {roomsData.map((room, index) => (
            <div
              key={`vip-${index}`}
              className="flex flex-col sm:flex-row items-center bg-white rounded-lg overflow-hidden duration-300 group"
            >
              <figure className="w-full sm:w-1/2 aspect-square overflow-hidden">
                <Image
                  src={sampleImg}
                  alt="Ruang DSW"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="w-full sm:w-1/2 p-6 md:p-8 text-center sm:text-left">
                <h3 className="text-2xl text-primary font-semibold mb-2.5">{room.title}</h3>
                {/* S & K */}
                <div className="mb-5">
                  <h5 className="text-lg text-primary font-semibold mb-1.5">Syarat dan Ketentuan</h5>
                  <ul>
                    <li className="flex justify-center sm:justify-start items-center gap-2.5 text-sm">
                      Minimum pemesanan
                      <strong className="text-base text-accent">
                        {currencyConversion("id-ID", "IDR", room.minOrder)}
                      </strong>
                    </li>
                    <li className="flex justify-center sm:justify-start items-center gap-2.5 text-sm">
                      Kapasitas
                      <strong className="text-base text-accent">{room.capacity} orang</strong>
                    </li>
                  </ul>
                </div>
                <Button>Reservasi</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};