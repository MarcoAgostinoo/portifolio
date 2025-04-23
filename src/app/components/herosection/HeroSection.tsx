import Image from "next/image";

export default function HeroSection({
  name = "Marco A.D.A Melo",
  subtitle = "I Am Passionate Dev",
  description = "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.",
  imageSrc = "/img1.jpeg",
  cvLink = "/cv.pdf",
}) {
  return (
    <section
      id="hero"
      className="relative bg-white overflow-hidden md:h-screen">
      {/* Bolha decorativa */}
      <div className="absolute -top-20 -right-20 w-40 h-40 md:w-[600px] md:h-[600px] bg-green-100 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center py-12 md:py-20">
        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-base md:text-lg text-gray-600 mb-2">Hello, I am</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            {subtitle}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            {description}
          </p>
          <a
            href={cvLink}
            download
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition">
            Download CV
          </a>
        </div>

        {/* Imagem */}
        <div className="w-full flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[432px] lg:h-[432px] rounded-full overflow-hidden bg-green-500 p-1">
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 432px"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
