import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Guia Água Segura
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/coleta-agua" className="hover:underline">
              Coleta
            </Link>
          </li>
          <li>
            <Link href="/purificacao" className="hover:underline">
              Purificação
            </Link>
          </li>
          <li>
            <Link href="/armazenamento" className="hover:underline">
              Armazenamento
            </Link>
          </li>
          <li>
            <Link href="/cuidados-importantes" className="hover:underline">
              Cuidados
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
