'use client';

import { useState } from 'react';
import Image from 'next/image';

const CATEGORIES = [
  'Todos',
  'Marca',
  'Photoshop',
  'Moda',
  'Produto',
];

type ImageItem = {
  src: string;
  alt: string;
  category: string;
};

const SAMPLE_IMAGES: ImageItem[] = [
  { src: '/img1.jpeg', alt: 'Retrato', category: 'Marca' },
  { src: '/img2.webp', alt: 'Vaso', category: 'Photoshop' },
  { src: '/img3.webp', alt: 'App iOS', category: 'Produto' },
  { src: '/img4.webp', alt: 'Caneta', category: 'Marca' },
  { src: '/img5.webp', alt: 'Garrafa', category: 'Produto' },
  { src: '/img6.webp', alt: 'Bloco de notas', category: 'Photoshop' },
  { src: '/img7.webp', alt: 'Raquete', category: 'Moda' },
  { src: '/img8.webp', alt: 'Escova', category: 'Marca' },
  { src: '/img9.webp', alt: 'Bicicleta', category: 'Moda' },
];

export default function Gallery({ images = SAMPLE_IMAGES }: { images?: ImageItem[] }) {
  const [currentCat, setCurrentCat] = useState<string>('Todos');
  const [selected, setSelected] = useState<ImageItem | null>(null);

  const filtered =
    currentCat === 'Todos'
      ? images
      : images.filter((img) => img.category === currentCat);

  return (
    <section className="bg-white text-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <h2 className="text-3xl font-semibold inline-block relative pb-2">
          MEU PORTFÓLIO.
          <div className="flex">
            <span className="absolute bottom-0 left-0 h-1 w-6/12 bg-green-500" />
            <span className="absolute bottom-0 left-0 h-1 w-6/12 bg-green-500" />
          </div>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 flex flex-wrap gap-4 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCurrentCat(cat)}
            className={`text-sm font-medium px-3 py-1 rounded ${
              currentCat === cat
                ? 'text-green-500 border-b-2 border-green-500'
                : 'text-gray-600 hover:text-green-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(img)}
            className="relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-all aspect-[3/4]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
          <div className="relative w-11/12 max-w-4xl h-4/5 bg-white rounded-lg overflow-hidden">
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
