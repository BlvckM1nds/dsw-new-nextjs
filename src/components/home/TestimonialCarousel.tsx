import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../ui/carousel";
import { FaStar } from "react-icons/fa6";

import sampleProfile from "@/assets/ryu-alvano.jpg";

export default function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="container"
    >
      <CarouselContent>
        {[1, 2, 3, 4, 5, 6].map((value: number) => (
          <CarouselItem key={value} className="md:basis-1/2 lg:basis-1/3">
            <div className="bg-white p-8 md:p-10 space-y-6 rounded-lg">
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img src={sampleProfile.src} alt="Profile" className="h-12" />
                <div>
                  <h5 className="font-bold text-lg text-primary">John Doe</h5>
                  <p className="text-primary">Jakarta Utara, Indonesia</p>
                </div>
              </div>
              {/* Comment */}
              <q className="block text-sm text-primary/60 font-medium leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ullam quis optio sit quaerat error perferendis, voluptatibus sint laborum laboriosam!</q>
              {/* Rating */}
              <div className="flex gap-1.5 text-secondary">
                {[1, 2, 3, 4, 5].map(num => <FaStar key={num} />)}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};