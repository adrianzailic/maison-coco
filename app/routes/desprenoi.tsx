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
            Maison Coco a fost fondat in 2015 cu pasiunea pentru a livra mobila pentru casa de calitate superioara, cu un stil si rafinament aparte. Filozofia noastra este sa cream produse la comanda care sa se potriveasca gusturilor clientului cat si arhitecturii casei pe care o detine. Mobila este produsa in atelierul nostru cu cea mai mare atentie la calitate si detalii.

            Pe langa mobilier, atelierul nostru produce si draperii dintr-o selectie variata de materiale si modele.

            Oferim servicii de consultanta la domiciliu pentru a veni cu cele mai bune optiuni de mobilier si acesorii care sa se potriveasca camerei/casei clientului.
        </div>
    );
}
