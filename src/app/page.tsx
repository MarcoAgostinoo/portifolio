import Head from "next/head";
import NavBar from "./components/navbar/NavBar";
import { TimeLines } from "./components/timeLine/TimeLines";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Gallery from "./components/gallery/Gallery";
import HeroSection from "./components/herosection/HeroSection";
import ContactForm from "./components/contact/Contact";
import SplideCarousel from "./components/splideCaroucel/SplideCarousel";

const imageUrls = [
  // React
  "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
  // Next.js
  "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png",
  // Tailwind CSS
  "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  // prismic
  "https://avatars.githubusercontent.com/u/4621061?s=200&v=4",
  // TypeScript
  "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png",
  // Framer Motion
  "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
  // Splide.js
  "https://avatars.githubusercontent.com/u/43422745?s=200&v=4",
  // Heroicons
  "https://heroicons.com/favicon.ico",
  // Material Tailwind
  "https://avatars.githubusercontent.com/u/103168013?s=200&v=4",
  // Axios
  "https://avatars.githubusercontent.com/u/32372333?s=200&v=4",
  // Date-fns
  "https://avatars.githubusercontent.com/u/36390748?s=200&v=4",
  // Dayjs
  "https://day.js.org/img/favicon.ico",
  // Prettier
  "https://prettier.io/icon.png",
  // ESLint
  "https://eslint.org/icon.svg",
  // Git
  "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio • Sergio Gadot</title>
        <meta name="description" content="…" />
      </Head>
      <div className="flex min-h-screen">
        <aside className="lg:block lg:w-64 xl:w-72">
          <NavBar />
        </aside>
        <main className="flex-1">
          <HeroSection />
          <TimeLines />
          <Skills />
          <div className="mb-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">Tecnologias que utilizo</h2>
            </div>
            <SplideCarousel
              imageUrls={imageUrls}
            />
          </div>
          <Services />
          <Gallery />
          <ContactForm />
        </main>
      </div>
    </>
  );
}
