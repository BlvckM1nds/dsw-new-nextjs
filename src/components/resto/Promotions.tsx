"use client";

import { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { formatLongDate } from "@/utils/formatter";
import { Promo } from "@/lib/types";
import Wrapper from "../common/Wrapper";
import { Button } from "../ui/button";
import sampleBg from "../../assets/cooks-bw.jpg";

const promoData: Promo[] = [
  {
    "title": "Makan Hemat di Hari Senin",
    "description": "Nikmati diskon spesial 20% setiap Senin di semua menu! Ajak keluarga dan teman-teman untuk menikmati hidangan favorit Anda dengan harga lebih terjangkau. Jangan lewatkan kesempatan ini untuk memulai minggu dengan kenikmatan kuliner yang luar biasa.",
    "visual": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-promotion-instagram-design-template-0db5641689dfc028146176cd38f275d7_screen.jpg?ts=1613180197",
    "startDate": "2024-07-01T00:00:00Z",
    "endDate": "2024-08-07T23:59:59Z"
  },
  {
    "title": "Paket Keluarga Happy Weekend",
    "description": "Rayakan akhir pekan bersama keluarga dengan Paket Keluarga Happy Weekend. Dapatkan hidangan lengkap untuk 4 orang hanya dengan Rp 250.000. Menu spesial ini mencakup hidangan pembuka, utama, dan penutup yang pasti memuaskan seluruh anggota keluarga. Hanya tersedia setiap Sabtu dan Minggu!",
    "visual": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/todays-special-design-template-6a9d693243d90acf1ee8ba0414a86ace_screen.jpg?ts=1699270428",
    "startDate": "2024-07-01T00:00:00Z",
    "endDate": "2024-08-07T23:59:59Z"
  },
  {
    "title": "Ladies Night, Diskon 30% untuk Wanita",
    "description": "Ladies, ini malam kalian! Setiap Kamis, nikmati diskon 30% untuk semua hidangan dan minuman bagi para wanita. Ajak sahabat-sahabat Anda untuk bersantai dan menikmati hidangan lezat dalam suasana yang nyaman dan menyenangkan. Jangan lewatkan malam spesial ini!",
    "visual": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-promotion-instagram-design-template-770fed14ebdcc070ebc1fb1cdf580772_screen.jpg?ts=1641638536",
    "startDate": "2024-07-01T00:00:00Z",
    "endDate": "2024-08-07T23:59:59Z"
  }
];

export default function Promotions() {
  const [api, setApi] = useState<CarouselApi>();
  const [promos, setPromos] = useState<Promo[]>(promoData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap())
    });
  }, [api]);

  return (
    <Wrapper id="promotions" className="bg-cover bg-center py-16 lg:py-24" style={{ backgroundImage: `url(${sampleBg.src})` }}>
      <h2 className="mb-8 md:mb-12 font-rabona font-bold text-white text-center text-3xl lg:text-4xl">Promo Kami</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:bg-white md:rounded-lg md:overflow-hidden md:flex-row md:items-center group">
        {/* Information */}
        <div className="p-5 text-center order-2 space-y-4 md:order-1 md:text-left md:basis-1/2 md:max-w-1/2 md:p-10 md:space-y-4">
          <h2 className="text-white md:text-accent text-xl md:text-2xl font-bold">{promos[currentIndex]?.title}</h2>
          <p className="text-sm md:text-base text-white/60 md:text-primary/60 line-clamp-3">{promos[currentIndex]?.description}</p>
          <div>
            <h4 className="text-base md:text-lg text-white md:text-primary font-semibold">Periode Promo:</h4>
            <p className="inline-flex items-center text-sm md:text-base text-white/60 md:text-primary/60">
              <BsClock className="hidden md:inline text-lg mr-1.5" />
              {formatLongDate("id-ID", promos[currentIndex]?.startDate)} &#x2212; {formatLongDate("id-ID", promos[currentIndex]?.endDate)}
            </p>
          </div>
          <Button>Lihat Detail</Button>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true
          }}
          className="w-screen order-1 md:order-2 md:basis-1/2 md:max-w-1/2"
        >
          <CarouselContent>
            {promos?.map((promo: Promo, index: number) => (
              <CarouselItem key={index}>
                <div className="px-8 md:p-0">
                  <img
                    src={promo.visual}
                    alt="Visual"
                    className="w-full transition-all duration-300 group-hover:md:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Wrapper>
  );
};