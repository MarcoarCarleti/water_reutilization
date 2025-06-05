"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/coleta-agua", label: "Coleta" },
  { href: "/purificacao", label: "Purificação" },
  { href: "/armazenamento", label: "Armazenamento" },
  { href: "/cuidados-manutencao", label: "Cuidados e Manutenção" }, 
  { href: "/checklist-preparacao", label: "Checklist" },
];

const Navbar = () => {
  const currentPathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-2 md:mb-0">
          Guia Água Segura
        </Link>
        <ul className="flex flex-wrap space-x-2 sm:space-x-4">
          {navLinks.map((link) => {
            const isActive = currentPathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-sm sm:text-base transition-colors duration-150 ease-in-out
                    ${
                      isActive
                        ? 'bg-white text-blue-700 font-semibold shadow-inner' 
                        : 'hover:bg-white hover:text-blue-700' 
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;