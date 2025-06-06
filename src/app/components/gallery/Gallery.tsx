'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaTimesCircle } from 'react-icons/fa';

const CATEGORIES = ['Todos', 'Marca', 'Photoshop', 'Moda', 'Produto'];

type ImageItem = {
  src: string;
  alt: string;
  category: string;
  title: string;
  subtitle: string;
  link: string;
};

const SAMPLE_IMAGES: ImageItem[] = [
  { src: '/imgGalery1.png', alt: 'Retrato', category: 'Marca', title: 'Retrato de Marca', subtitle: 'Descrição do retrato', link: 'https://exemplo.com/retrato' },
  { src: '/imgGalery2.png', alt: 'Vaso', category: 'Photoshop', title: 'Vaso Editado', subtitle: 'Edição no Photoshop', link: 'https://exemplo.com/vaso' },
  { src: '/imgGalery3.png', alt: 'App iOS', category: 'Produto', title: 'App iOS', subtitle: 'Design de aplicativo', link: 'https://exemplo.com/app' },
  { src: '/imgGalery4.png', alt: 'Caneta', category: 'Marca', title: 'Caneta Personalizada', subtitle: 'Item de branding', link: 'https://exemplo.com/caneta' },
  { src: '/imgGalery5.png', alt: 'Garrafa', category: 'Produto', title: 'Garrafa Moderna', subtitle: 'Produto minimalista', link: 'https://exemplo.com/garrafa' },
  { src: '/imgGalery6.png', alt: 'Bloco de notas', category: 'Photoshop', title: 'Bloco Editado', subtitle: 'Design criativo', link: 'https://exemplo.com/bloco' },
  { src: '/imgGalery7.png', alt: 'Raquete', category: 'Moda', title: 'Raquete Estilosa', subtitle: 'Acessório de moda', link: 'https://exemplo.com/raquete' },
  { src: '/imgGalery8.png', alt: 'Escova', category: 'Marca', title: 'Escova de Marca', subtitle: 'Produto de identidade', link: 'https://exemplo.com/escova' },
  { src: '/imgGalery9.png', alt: 'Bicicleta', category: 'Moda', title: 'Bicicleta Fashion', subtitle: 'Estilo e funcionalidade', link: 'https://exemplo.com/bicicleta' },
];

export default function Gallery({ images = SAMPLE_IMAGES }: { images?: ImageItem[] }) {
  const [currentCat, setCurrentCat] = useState<string>('Todos');
  const [selected, setSelected] = useState<ImageItem | null>(null);
  const [orientationMap, setOrientationMap] = useState<Record<string, 'horizontal' | 'vertical'>>({});
  const modalRef = useRef<HTMLDivElement>(null);

  const filtered =
    currentCat === 'Todos'
      ? images
      : images.filter((img) => img.category === currentCat);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (selected && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selected]);

  const onImageLoad =
    (src: string) =>
    ({ naturalWidth, naturalHeight }: { naturalWidth: number; naturalHeight: number }) => {
      setOrientationMap((prev) => ({
        ...prev,
        [src]: naturalWidth >= naturalHeight ? 'horizontal' : 'vertical',
      }));
    };

  return (
    <section id="portfolio" className="bg-white text-gray-900 py-16 font-inter">
      {/* Título e categorias */}
      <div className="max-w-5xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          Meu <span className="text-green-500">Portfólio</span>
        </h2>
        <p className="text-lg text-gray-600">Projetos de design, branding e produto</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCurrentCat(cat)}
            className={`text-sm sm:text-base px-4 py-2 rounded-full font-medium transition-colors ${
              currentCat === cat
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de imagens */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onClick={() => setSelected(img)}
            className={`relative overflow-hidden rounded-xl cursor-pointer hover:scale-[1.03] hover:shadow-lg transition-all ${
              orientationMap[img.src] === 'horizontal' ? 'aspect-video' : 'aspect-[3/4]'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              onLoadingComplete={onImageLoad(img.src)}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal com layout moderno */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            role="dialog"
            aria-label="Modal de imagem ampliada"
            tabIndex={-1}
            ref={modalRef}
          >
            <div className="relative flex flex-col w-11/12 max-w-6xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Botão de fechar */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-8 h-8 flex items-center justify-center rounded-full z-10"
                aria-label="Fechar modal"
              >
                <FaTimes />
              </button>

              {/* Conteúdo principal: imagem + detalhes */}
              <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
                <div className="relative flex-1 bg-black">
                  <Image
                    src={selected.src}
                    alt={selected.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6 md:w-1/3 w-full bg-gray-50 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{selected.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{selected.subtitle}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center transition"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Visitar Site
                    </a>
                    <button
                      onClick={() => setSelected(null)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center justify-center transition"
                    >
                      <FaTimesCircle className="mr-2" />
                      Fechar
                    </button>
                  </div>
                </div>
              </div>

              {/* Painel de miniaturas */}
              <div className="bg-gray-100 p-4 flex overflow-x-auto gap-4">
                {filtered.map((img) => (
                  <div
                    key={img.src}
                    onClick={() => setSelected(img)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden cursor-pointer transition-opacity ${
                      selected.src === img.src ? 'ring-2 ring-green-500 opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
