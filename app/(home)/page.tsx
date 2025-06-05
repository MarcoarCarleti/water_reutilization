// app/page.tsx
import Link from "next/link";
import SectionTitle from "../../components/section-title";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <header className="text-center py-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-blue-700">
          Reutilização de Água em Desastres Naturais
        </h1>
        <p className="text-xl mt-4 text-gray-600">
          Um guia prático para garantir água segura quando mais se precisa.
        </p>
      </header>

      <section>
        <SectionTitle title="Por que reutilizar água?" />
        <p className="text-lg leading-relaxed mb-4">
          Em situações de desastres naturais, o acesso à água potável pode ser
          severamente comprometido. Aprender a coletar, tratar e armazenar água
          da chuva de forma segura é uma habilidade vital que pode salvar vidas
          e garantir a saúde da sua família e comunidade. Este guia oferece
          métodos práticos e acessíveis.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Coleta da Água da Chuva",
            href: "/coleta-agua",
            description:
              "Aprenda a captar água da chuva de forma eficaz e segura.",
          },
          {
            title: "Filtragem e Purificação",
            href: "/purificacao",
            description:
              "Métodos para tornar a água coletada segura para consumo.",
          },
          {
            title: "Armazenamento Seguro",
            href: "/armazenamento",
            description:
              "Como guardar a água tratada para manter sua qualidade.",
          },
          {
            title: "Cuidados e Manutenção",
            href: "#",
            description:
              "Mantenha seus sistemas de coleta e armazenamento sempre prontos.",
          },
          {
            title: "Recursos Adicionais",
            href: "#",
            description: "Tecnologias e filtros que podem auxiliar.",
          },
          {
            title: "Cuidados Importantes",
            href: "/cuidados-importantes",
            description: "Alertas e precauções essenciais para sua segurança.",
          },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
