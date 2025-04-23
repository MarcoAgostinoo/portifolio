import Head from "next/head";
import NavBar from "./components/navbar/NavBar";
import { TimeLines } from "./components/timeLine/TimeLines";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Gallery from "./components/gallery/Gallery";
import HeroSection from "./components/herosection/HeroSection";
import ContactForm from "./components/contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio • Sergio Gadot</title>
        <meta name="description" content="…" />
      </Head>
      <div className="flex min-h-screen">
        <aside className="hidden lg:block lg:w-64 xl:w-72">
          <NavBar />
        </aside>
        <main className="flex-1">
          <HeroSection />
          <TimeLines />
          <Skills />
          <Services />
          <Gallery />
          <ContactForm />
        </main>
      </div>
    </>
  );
}
