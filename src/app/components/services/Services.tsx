import { AiOutlineLayout } from "react-icons/ai";
import { FaShoppingCart, FaBullseye, FaDesktop } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { SiZapier } from "react-icons/si";

const services = [
  {
    title: "Criação de Sites Personalizados",
    icon: AiOutlineLayout,
    desc: "Desenvolvo sites responsivos e modernos, com até 5 páginas, design exclusivo e otimização para SEO.",
  },
  {
    title: "Landing Pages Otimizadas",
    icon: FaDesktop,
    desc: "Landing pages focadas em conversão, com integração ao Google Analytics e outras ferramentas de marketing.",
  },
  {
    title: "E-commerce Personalizado",
    icon: FaShoppingCart,
    desc: "Loja virtual completa, integrações de pagamento, certificado SSL e suporte ao cliente para alavancar suas vendas.",
  },
  {
    title: "Otimização SEO",
    icon: FaBullseye,
    desc: "Análise e melhoria de performance em buscadores, palavras-chave estratégicas e práticas recomendadas de SEO.",
  },
  {
    title: "Automação de Marketing",
    icon: SiZapier,
    desc: "Configuração de workflows automatizados, integração com WhatsApp e ferramentas de e-mail marketing.",
  },
  {
    title: "Manutenção & Suporte",
    icon: FiSettings,
    desc: "Atualizações contínuas, backup, monitoramento de segurança e atendimento rápido para manter seu site sempre online.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white text-gray-900 py-16">
      {/* Título */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-semibold inline-block relative pb-2">
          O QUE EU FAÇO?
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-500"></span>
        </h2>
      </div>

      {/* Grid de cards */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="flex items-start p-6 rounded-lg border border-gray-200 bg-gray-50 transition-colors hover:bg-green-500 hover:text-white cursor-pointer"
            >
              <Icon size={28} className="flex-shrink-0 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
