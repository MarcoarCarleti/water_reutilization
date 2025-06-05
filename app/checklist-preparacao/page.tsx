"use client"; 

import SectionTitle from '@/components/section-title';
import { useState } from 'react';

interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  citation?: number | number[]; 
}

const checklistItems: ChecklistItem[] = [
  { id: 'c1', category: 'Coleta', text: 'Possuo recipientes limpos e adequados (baldes, bacias, lonas) para coletar água da chuva.', citation: [1, 15] },
  { id: 'c2', category: 'Coleta', text: 'Sei da importância de descartar os primeiros minutos de água da chuva devido a impurezas.', citation: [3, 17] },
  { id: 'c3', category: 'Coleta', text: 'Tenho um local definido e seguro para posicionar os coletores de água, longe de contaminantes.', citation: 16 },
  
  { id: 'p1', category: 'Purificação', text: 'Tenho materiais para montar um filtro improvisado (garrafa PET, pano limpo, carvão vegetal, areia/pedras opcionais).', citation: [19, 20, 21, 22] },
  { id: 'p2', category: 'Purificação', text: 'Conheço o procedimento de ferver a água por pelo menos 5 minutos para desinfecção.', citation: [5, 23] },
  { id: 'p3', category: 'Purificação', text: 'Possuo hipoclorito de sódio a 2,5% (água sanitária sem perfume) e sei a dosagem correta (2-4 gotas/litro ou 2 gotas/litro conforme improvisado) para cloração.', citation: [6, 25] },
  { id: 'p4', category: 'Purificação', text: 'Lembro de aguardar 30 minutos após a cloração antes de consumir a água.', citation: [6, 26] },

  { id: 'a1', category: 'Armazenamento', text: 'Disponho de recipientes de plástico de qualidade alimentar, higienizados e com tampa para armazenar água tratada.', citation: [8, 27] },
  { id: 'a2', category: 'Armazenamento', text: 'Sei que devo manter a água armazenada em local fresco, ao abrigo da luz solar e de contaminantes.', citation: [9, 28] },
  { id: 'a3', category: 'Armazenamento', text: 'Tenho o hábito de rotular os recipientes com a data de coleta e tratamento da água.', citation: 10 },
  
  { id: 'g1', category: 'Cuidados Gerais', text: 'Compreendo que NUNCA devo consumir água da chuva sem tratamento adequado, mesmo que pareça limpa.', citation: 30 },
  { id: 'g2', category: 'Cuidados Gerais', text: 'Evito coletar água que escorreu por superfícies sujas ou contaminadas.', citation: 31 },
];

export default function ChecklistPreparacaoPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleCheckboxChange = (itemId: string) => {
    setCheckedItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowResults(true);
  };

  const totalChecked = Object.values(checkedItems).filter(Boolean).length;
  const totalItems = checklistItems.length;
  const preparednessPercentage = totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0;

  const getCategoryItems = (category: string) => 
    checklistItems.filter(item => item.category === category);

  const categories = ['Coleta', 'Purificação', 'Armazenamento', 'Cuidados Gerais'];

  return (
    <div className="space-y-8">
      <SectionTitle title="✅ Checklist de Preparação para Água Segura" />
      <p className="text-lg text-gray-700 mb-6">
        Use este checklist para avaliar o quão preparado você está para garantir água segura em situações de emergência. Marque os itens que você já compreende ou possui.
      </p>

      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
        {categories.map(category => (
          <fieldset key={category} className="mb-8">
            <legend className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">{category}</legend>
            {getCategoryItems(category).map(item => (
              <label key={item.id} className="flex items-start p-3 my-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!checkedItems[item.id]}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded mr-3 mt-1 focus:ring-blue-500"
                />
                <span className="text-gray-800">
                  {item.text}
                  {item.citation && (
                    <span className="text-xs text-blue-500 ml-1">
                      {Array.isArray(item.citation) ? item.citation.map(() => ``).join(' ') : ``}
                    </span>
                  )}
                </span>
              </label>
            ))}
          </fieldset>
        ))}

        <div className="text-center mt-10">
          <button 
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Verificar meu Nível de Preparo
          </button>
        </div>
      </form>

      {showResults && (
        <div className="mt-10 p-6 bg-blue-50 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Seu Resultado:</h3>
          <p className="text-lg text-gray-700">
            Você marcou <strong>{totalChecked}</strong> de <strong>{totalItems}</strong> itens.
          </p>
          <div className="w-full bg-gray-200 rounded-full h-6 mt-4">
            <div
              className="bg-blue-600 h-6 rounded-full text-xs font-medium text-blue-100 text-center p-1 leading-none"
              style={{ width: `${preparednessPercentage}%` }}
            >
              {preparednessPercentage}% Preparado
            </div>
          </div>
          {preparednessPercentage < 50 && (
            <p className="mt-4 text-orange-600">
              Continue revisando as seções do site para melhorar seu preparo! Cada item é importante.
            </p>
          )}
          {preparednessPercentage >= 50 && preparednessPercentage < 100 && (
            <p className="mt-4 text-green-600">
              Muito bom! Você está no caminho certo. Revise os itens que faltam para estar totalmente preparado.
            </p>
          )}
          {preparednessPercentage === 100 && (
            <p className="mt-4 text-green-700 font-semibold">
              Parabéns! Você demonstrou um excelente nível de conhecimento e preparo para garantir água segura!
            </p>
          )}
        </div>
      )}
    </div>
  );
}