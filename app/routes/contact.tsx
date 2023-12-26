import type { MetaFunction } from "@remix-run/cloudflare";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Maison Coco" },
    { name: "description", content: "Atelier de mobila la comanda" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h4 className="text-xl font-bold">Mai multe informatii</h4>
      <p>
        Maison Coco este un magazin de mobila ce vinde o varietate de produse
        pentru casa de la mobila clasica pana la draperii elegante si candelabre
        de lux.
      </p>
      <p>
        <span className="font-bold">Adresa:</span> Apoldu de Sus Nr.267 C,
        Sibiu, Romania <br />
        <span className="font-bold">Telefon:</span> (+4) 0733 672 434
      </p>
    </div>
  );
}
