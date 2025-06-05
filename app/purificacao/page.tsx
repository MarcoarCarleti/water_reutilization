import SectionTitle from '@/components/section-title';
import Fervura from './components/fervura';

export default function PurificacaoPage() {
  return (
    <div>
      <SectionTitle title="Filtragem e Purificação da Água ✨" />
      <p className="text-lg mb-6">
        A água coletada precisa ser tratada para remover impurezas e microrganismos perigosos. Veja os métodos abaixo.
      </p>


      <h3 className="text-2xl font-semibold text-gray-700 my-4">Métodos de Desinfecção</h3>
      <Fervura />
    
    </div>
  );
}