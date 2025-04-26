import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";

export function TimeLines() {
  return (
    <Timeline id="timeline" className="w-9/12 ml-16 lg:ml-24 bg-white">
      {/* Fevereiro de 2022: Início da Formação Acadêmica */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>Fevereiro de 2022</TimelineTime>
          <TimelineTitle>Início do Bacharelado em Tecnologia da Informação</TimelineTitle>
          <TimelineBody>
            Iniciei meu curso na Univesp, dando o primeiro passo para me especializar em Tecnologia da Informação e desenvolvimento de software.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Março de 2024: Início como Freelancer */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>Março de 2024</TimelineTime>
          <TimelineTitle>Início como Desenvolvedor Web Freelancer</TimelineTitle>
          <TimelineBody>
            Comecei a atuar como freelancer na Metropoleweb, desenvolvendo sites e landing pages com HTML, CSS e JavaScript.
          </TimelineBody>
          <Button color="gray">
            Ver Projetos
            <FaArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </TimelineContent>
      </TimelineItem>

      {/* Junho de 2024: Início na Kisite */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>Junho de 2024</TimelineTime>
          <TimelineTitle>Desenvolvedor Full-stack na Kisite</TimelineTitle>
          <TimelineBody>
            Entrei na Kisite como desenvolvedor full-stack, trabalhando com React, Node.js e outras tecnologias para criar soluções web.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Julho de 2024: Primeiros Projetos na Kisite */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>Julho de 2024</TimelineTime>
          <TimelineTitle>Primeiros Projetos Entregues na Kisite</TimelineTitle>
          <TimelineBody>
            Concluí meus primeiros projetos na Kisite, aplicando boas práticas de desenvolvimento e recebendo feedback positivo.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Ao longo de 2024: Entrega de Projetos Freelancer */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>Ao longo de 2024</TimelineTime>
          <TimelineTitle>Entrega de +10 Projetos Freelancer</TimelineTitle>
          <TimelineBody>
            Entreguei mais de 10 projetos como freelancer, alcançando uma média de 4,9/5 em satisfação dos clientes.
          </TimelineBody>
          <Button color="gray">
            Ver Portfólio
            <FaArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}