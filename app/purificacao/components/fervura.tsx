const Fervura = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow mb-6">
      <h3 className="text-2xl font-semibold text-red-600 mb-3">
        🔥 Método de Desinfecção: Fervura
      </h3>
      <p className="text-gray-700 mb-2">
        A fervura é um método altamente eficaz para eliminar microrganismos
        patogênicos da água.
      </p>
      <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
        Procedimento:
      </h4>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>
          Após a filtragem inicial (se realizada), coloque a água em um
          recipiente resistente ao calor.
        </li>
        <li>Leve a água à fervura vigorosa.</li>
        <li>
          Mantenha a fervura por pelo menos <strong>5 minutos</strong> para
          garantir a eliminação de microrganismos.
        </li>
        <li>
          Deixe a água esfriar completamente antes de consumi-la ou armazená-la.
        </li>
      </ol>
    </div>
  );
};
export default Fervura;
