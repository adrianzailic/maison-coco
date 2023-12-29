import { useState } from "react";
import { Link } from "@remix-run/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="flex items-center">
            <div className=" font-bold">
              <Link to="/" className=" hover:text-gray-300 mx-4">
                Maison Coco
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="block text-gray-500  focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`hidden md:flex items-center ${
              isOpen ? "hidden" : "flex-none justify-center"
            }`}
          >
            <Link className=" hover:text-gray-300 mx-4" to="/desprenoi">
              Despre Noi
            </Link>
            <Link className=" hover:text-gray-300 mx-4" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="block  hover:text-gray-300" to="/desprenoi">
              Despre Noi
            </Link>
            <Link className="block  hover:text-gray-300" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
