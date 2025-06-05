import SectionTitle from '../../components/section-title';

export default function CuidadosManutencaoPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Cuidados e Manutenção dos Sistemas 🧼" />

      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Manutenção Preventiva</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A manutenção regular dos seus sistemas de captação e armazenamento de água é fundamental para garantir a qualidade da água e a durabilidade do sistema.
        </p>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Limpeza Regular</h4>
          <p className="text-gray-700 leading-relaxed">
            Higienize os sistemas de captação e armazenamento periodicamente. 
            Isso é crucial para evitar a proliferação de algas e bactérias que podem contaminar a água. 
            Limpe calhas, telhados (se usados para coleta), filtros e os próprios recipientes de armazenamento.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Monitoramento da Qualidade da Água</h4>
          <p className="text-gray-700 leading-relaxed">
            Verifique regularmente a qualidade da água armazenada. 
            Observe atentamente os seguintes aspectos:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
            <li><strong>Cor:</strong> A água deve estar límpida e transparente. Alterações na cor podem indicar contaminação.</li>
            <li><strong>Odor:</strong> A água potável não deve ter cheiro. Odores estranhos são um sinal de alerta.</li>
            <li><strong>Presença de Partículas:</strong> Verifique se há sedimentos ou partículas suspensas na água.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            Se notar qualquer alteração suspeita, a água pode precisar ser tratada novamente antes do consumo ou, em caso de dúvida, descartada de forma segura.
          </p>
        </div>
      </div>

      <div className="p-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-3">Dica Importante</h3>
        <p className="leading-relaxed">
          Mantenha um registro das limpezas e inspeções realizadas. Isso ajuda a criar uma rotina de manutenção eficaz e a identificar problemas recorrentes.
        </p>
      </div>
    </div>
  );
}