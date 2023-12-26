import type { MetaFunction } from "@remix-run/cloudflare";

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
        <div className="w-1/2 p-4">
          <img src={Sofas} alt="Sofas" className="w-full h-auto rounded-md" />
        </div>
        <div className="w-1/2 p-4">
          <img
            src={BarCabinets}
            alt="Bar Cabinets"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-1/2 p-4">
          <img src={Dining} alt="Dining" className="w-full h-auto rounded-md" />
        </div>
        <div className="w-1/2 p-4">
          <img src={Chairs} alt="Chairs" className="w-full h-auto rounded-md" />
        </div>
        <div className="w-1/2 p-4">
          <img
            src={LivingRoom}
            alt="LivingRoom"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-1/2 p-4">
          <img src={Office} alt="Office" className="w-full h-auto rounded-md" />
        </div>
        <div className="w-1/2 p-4">
          <img
            src={Boudoir}
            alt="Boudoir"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-1/2 p-4">
          <img
            src={CoffeeTables}
            alt="CoffeeTables"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
