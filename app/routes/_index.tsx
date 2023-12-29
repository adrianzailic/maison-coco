import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";

import BarCabinets from "~/images/bar-cabinets.jpg";
import Boudoir from "~/images/boudoir.jpg";
import CoffeeTables from "~/images/coffee-tables.jpg";
import Chairs from "~/images/chairs.jpg";
import Dining from "~/images/dining.jpg";
import LivingRoom from "~/images/living-room.jpg";
import Office from "~/images/office.jpg";
import Sofas from "~/images/sofas.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "Maison Coco" },
    { name: "description", content: "Atelier de mobila la comanda" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="flex flex-wrap">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-full lg:basis-full">
              <div className="p-1">
                <img
                  src={Sofas}
                  alt="Sofas"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-full lg:basis-full">
              <div className="p-1">
                <img
                  src={BarCabinets}
                  alt="Bar Cabinets"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-full lg:basis-full">
              <div className="p-1">
                <img
                  src={LivingRoom}
                  alt="LivingRoom"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-full lg:basis-full">
              <div className="p-1">
                <img
                  src={Office}
                  alt="Office"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-full lg:basis-full">
              <div className="p-1">
                <img
                  src={Boudoir}
                  alt="Boudoir"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-full lg:basis-full">
              <div className="p-1">
                <img
                  src={CoffeeTables}
                  alt="CoffeeTables"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
