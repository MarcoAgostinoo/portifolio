import AdvancedRating from "../advancedrating/AdvancedRating";
import { Badge } from "flowbite-react";

export default function Skills() {
  return (
    <div
      id="habilidades"
      className="w-full min-h-screen flex flex-col bg-white px-4 md:px-16 lg:px-24">
      {/* Título */}
      <div className="w-full flex items-center h-10 mt-24 px-2 md:px-0">
        <h2 className="text-3xl text-gray-900 font-semibold">
          Educação & Habilidades
        </h2>
      </div>

      {/* Conteúdo principal */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-start justify-between gap-8 md:gap-16 py-12">
        {/* Coluna de Educação */}
        <div className="w-full md:w-4/12 flex flex-col justify-between bg-gray-50 p-6 md:p-8 text-gray-900 rounded-2xl shadow mb-8 md:mb-0">
          <div className="pb-6 border-b border-gray-200">
            <Badge color="success" size="sm" className="mb-2">
              2022–2025
            </Badge>
            <p className="font-semibold">
              Bacharelado em Tecnologia da Informação
            </p>
            <p className="text-sm">
              Univesp - Universidade Virtual do Estado de SP
            </p>
          </div>
          <div className="pt-6">
            <Badge color="success" size="sm" className="mb-2">
              2018–2024
            </Badge>
            <p className="font-semibold">
              Experiência Profissional em Logística
            </p>
            <p className="text-sm">
              Habilidades interpessoais como organização, eficiência,
              atendimento e comunicação.
            </p>
          </div>
          <div className="pt-6">
            <Badge color="success" size="sm" className="mb-2">
              2018–2024
            </Badge>
            <p className="font-semibold">
              Experiência Profissional em Logística
            </p>
            <p className="text-sm">
              Habilidades interpessoais como organização, eficiência,
              atendimento e comunicação.
            </p>
          </div>
          <div className="pt-6">
            <Badge color="success" size="sm" className="mb-2">
              2018–2024
            </Badge>
            <p className="font-semibold">
              Experiência Profissional em Logística
            </p>
            <p className="text-sm">
              Habilidades interpessoais como organização, eficiência,
              atendimento e comunicação.
            </p>
          </div>
        </div>

        {/* Coluna de Skills */}
        <div className="w-full md:w-7/12 flex flex-col justify-between bg-white p-6 md:p-8 text-gray-900 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Minhas Habilidades</h2>
          <p className="max-w-prose mb-6">
            Desenvolvedor Full-stack com experiência prática em soluções web
            personalizadas, sempre atento às boas práticas de UI/UX. Também
            desenvolvi forte capacidade de organização, comunicação eficiente e
            empatia no atendimento ao cliente, trabalhando em equipe sob pressão
            com foco em resultados. Acredito que tecnologia e relações humanas
            caminham juntas no sucesso de qualquer projeto.
          </p>

          <div className="mb-6">
            <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
              <li>Empatia e escuta ativa no atendimento a clientes</li>
              <li>Comunicação clara com foco em resolução de problemas</li>
              <li>Organização e disciplina em projetos e prazos</li>
              <li>Trabalho em equipe e colaboração com outros profissionais</li>
              <li>Proatividade e aprendizado contínuo</li>
            </ul>
          </div>
          <AdvancedRating />
        </div>
      </div>
    </div>
  );
}
