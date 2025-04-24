"use client";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export function TabsHero() {
  return (
    <div className="w-full text-center">
      <Tabs
        aria-label="Responsive tabs"
        className="flex flex-wrap justify-center gap-2 sm:gap-4"
      >
        <TabItem active title="Seu Perfil" icon={HiUserCircle}>
          Apresente sua identidade digital de forma profissional.
          <span className="font-medium text-gray-800 dark:text-white">
            Destaque suas informações e cause uma ótima primeira impressão online.
          </span>
        </TabItem>

        <TabItem title="Painel de Controle" icon={MdDashboard}>
          Visualize o desempenho do seu negócio digital.
          <span className="font-medium text-gray-800 dark:text-white">
            Acompanhe métricas importantes e tome decisões estratégicas para o seu crescimento.
          </span>
        </TabItem>

        <TabItem title="Configurações" icon={HiAdjustments}>
          Personalize sua experiência digital.
          <span className="font-medium text-gray-800 dark:text-white">
            Ajuste as opções para otimizar seu site e atendimento às suas necessidades.
          </span>
        </TabItem>

        <TabItem title="Contatos" icon={HiClipboardList}>
          Gerencie seus relacionamentos com clientes.
          <span className="font-medium text-gray-800 dark:text-white">
            Mantenha seus contatos organizados e facilite a comunicação com seu público.
          </span>
        </TabItem>

        <TabItem disabled title="Desativado">
          Conteúdo desativado
        </TabItem>
      </Tabs>
    </div>
  );
}