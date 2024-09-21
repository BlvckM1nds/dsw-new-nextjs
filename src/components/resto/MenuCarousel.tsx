import Image from "next/image";

import { currencyConversion } from "@/utils/formatter";
import sampleImage from "../../assets/gurame-bakar.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../ui/carousel";

export default function MenuCarousel() {
  return (
    <Carousel
      opts={{
        loop: true
      }}
      className="container"
    >
      <CarouselContent>
        {[1, 2, 3, 4, 5, 6].map((value: number) => (
          <CarouselItem
            key={value}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <div className="text-center bg-white rounded-lg overflow-hidden duration-300 group">
              <div className="w-full aspect-square overflow-hidden">
                <Image
                  src={sampleImage}
                  alt="Menu DSW"
                  className="w-full transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="font-rabona tracking-wide text-2xl font-bold text-primary">Gurame Bakar</h3>
                <p className="text-sm text-primary/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, excepturi. Aperiam nam fugiat doloremque at?</p>
                <p className="text-2xl text-accent font-bold">
                  {currencyConversion("id-ID", 'IDR', 150000)}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};