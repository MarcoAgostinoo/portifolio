import Image from "next/image";
export default function HeroSection({
  name = "Marco A. D. A. Melo",
  subtitle = "Desenvolvedor Full-stack | Especialista em Soluções Web",
  description = "Com 6 anos de experiência em gestão e atendimento, e paixão por desenvolvimento web, crio sites responsivos e interativos que fortalecem a presença online de empresas. Especializado em React, Node.js e tecnologias modernas, já entreguei +10 projetos com alta satisfação.",
  imageSrc = "/image.jpg",
  cvLink = "/curriculoMarcoMelo.pdf",
}) {
  return (
    <section
      id="hero"
      className="relative h-screen bg-white overflow-hidden mt-14 lg:mt-0">
      {/* Bolha decorativa */}
      <div className="absolute -top-10 lg:-top-28 -right-20 w-40 h-40 md:w-[600px] md:h-[600px] bg-green-300 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center py-12 md:py-20">
        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-base md:text-lg text-gray-600 mb-2">Olá, eu sou</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            {subtitle}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            {description}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={cvLink}
              download
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition">
              Download CV
            </a>
            <a
              href="https://www.kisite.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition">
              Visite KiSite.com.br
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden bg-green-500 p-1">
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 832px"
              className="object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}