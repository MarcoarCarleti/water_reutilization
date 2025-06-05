import SectionTitle from '../../components/section-title'; // Supondo que SectionTitle está em app/components

export default function ArmazenamentoSeguroPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Armazenamento Seguro da Água Tratada 🏺" />

      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Recomendações Essenciais</h3>
        
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Recipientes Adequados</h4>
          <p className="text-gray-700 leading-relaxed">
            Utilize recipientes de plástico de qualidade alimentar, devidamente higienizados. 
            Certifique-se de que os recipientes estejam limpos e com tampa para armazenar a água tratada.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Local de Armazenamento Ideal</h4>
          <p className="text-gray-700 leading-relaxed">
            Mantenha os recipientes em locais frescos, ao abrigo da luz solar direta e de contaminantes. 
            Isso ajuda a preservar a qualidade da água por mais tempo.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Rotulagem Correta</h4>
          <p className="text-gray-700 leading-relaxed">
            Identifique os recipientes com a data de coleta e o tratamento da água. 
            Isso ajuda a controlar o tempo de armazenamento e a priorizar o uso da água mais antiga.
          </p>
        </div>
      </div>

      <div className="p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-3">Prevenindo a Recontaminação!</h3>
        <p className="leading-relaxed">
          Evite o contato da água tratada com utensílios ou mãos sujas para prevenir a recontaminação. 
          Manter a higiene durante o manuseio é crucial.
        </p>
      </div>
    </div>
  );
}