import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <header className="py-4">
            <nav className="flex justify-center text-lg font-semibold">
                <Link className="mx-4 hover:text-gray-300" to="/">Maison Coco</Link>
                <Link className="mx-4 hover:text-gray-300" to="/desprenoi">Despre Noi</Link>
                <Link className="mx-4 hover:text-gray-300" to="/contact">Contact</Link>
            </nav>
        </header>
    )
}