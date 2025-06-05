const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-12">
      <p>
        &copy; {new Date().getFullYear()} Guia de Reutilização de Água.
        Informações baseadas no documento fornecido.
      </p>
    </footer>
  );
};
export default Footer;
