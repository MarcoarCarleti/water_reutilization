import SectionTitle from '../../components/section-title';

export default function ColetaAguaPage() {
  return (
    <div>
      <SectionTitle title="Coleta da Água da Chuva 🌧️" />

      <div className="space-y-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Sistemas de Captação Recomendados</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Telhados e Calhas:</strong> Utilize telhados limpos e calhas para direcionar a água da chuva para recipientes de armazenamento.</li>
            <li><strong>Cisternas:</strong> Instale cisternas para armazenar grandes volumes de água.</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Métodos Simples e Improvisados</h3>
          <p className="text-gray-700 mb-2">Em situações improvisadas, baldes, lonas ou recipientes limpos podem ser usados para coletar água diretamente da chuva.</p>
          <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Materiais Necessários (para improvisação):</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Recipientes limpos como baldes, bacias, lonas ou garrafas PET cortadas.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Procedimento (para improvisação):</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>Escolha do Local:</strong> Posicione os recipientes em áreas abertas, longe de árvores e estruturas que possam contaminar a água com folhas, fezes de animais ou outros detritos.</li>
            <li><strong>Coleta Direta:</strong> Permita que a chuva caia diretamente nos recipientes limpos.</li>
          </ol>
        </div>

        <div className="p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-3">‼️ Importante: Descarte a Primeira Água</h3>
          <p>Sempre descarte as primeiras águas da chuva (os primeiros minutos). Elas podem conter contaminantes do telhado, da atmosfera ou das superfícies de coleta.</p>
        </div>

         <div className="p-6 bg-white rounded-lg shadow mt-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Armazenamento Pós-Coleta (Breve)</h3>
            <p className="text-gray-700">Após a coleta, armazene a água em recipientes limpos e tampados para evitar a entrada de contaminantes. Detalhes completos na seção de Armazenamento Seguro.</p>
        </div>
      </div>
    </div>
  );
}