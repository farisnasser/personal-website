import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
 
  'IMG-20250722-WA0053.jpg',
  'IMG-20250722-WA0052.jpg',
  'IMG-20250722-WA0051.jpg',
  'IMG-20250722-WA0050.jpg',
  'IMG-20250722-WA0049.jpg',
  'IMG-20250722-WA0048.jpg',
  'IMG-20250722-WA0047.jpg',
  'IMG-20250722-WA0046.jpg',
  'IMG-20250722-WA0045.jpg',
  
  'IMG-20250722-WA0043.jpg',
  'IMG-20250722-WA0042.jpg',
  'IMG-20250722-WA0041.jpg',
  'IMG-20250722-WA0040.jpg',
  'IMG-20250722-WA0039.jpg',
  'IMG-20250722-WA0038.jpg',
  'IMG-20250722-WA0037.jpg',
  'IMG-20250722-WA0036.jpg',
  'IMG-20250722-WA0035.jpg',
  
  'IMG-20250722-WA0031.jpg',
  'IMG-20250722-WA0030.jpg',
  'IMG-20250722-WA0029.jpg',
  'IMG-20250722-WA0028.jpg',
  'IMG-20250722-WA0027.jpg',
  'IMG-20250722-WA0026.jpg',
  'IMG-20250722-WA0025.jpg',
  'IMG-20250722-WA0024.jpg',
  'IMG-20250722-WA0023.jpg',
  'IMG-20250722-WA0022.jpg',
  'IMG-20250722-WA0021.jpg',
  'IMG-20250722-WA0020.jpg',
  'IMG-20250722-WA0019.jpg',
  'IMG-20250722-WA0017.jpg',
  'IMG-20250722-WA0016.jpg',
  'IMG-20250722-WA0015.jpg',
  'IMG-20250722-WA0014.jpg',
  'IMG-20250722-WA0012.jpg',  
  'IMG-20250722-WA0008.jpg',
  'IMG-20250722-WA0007.jpg',
  'IMG-20250722-WA0005.jpg',
  'IMG-20250722-WA0003.jpg',
  'IMG-20250722-WA0002.jpg',
].map(f => `/gallery/${f}`);

const Gallery = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section id="gallery" className="min-h-screen flex flex-col items-center py-16 scroll-mt-24">
      <motion.h1
        className="text-4xl font-bold text-gray-200 mb-10 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Gallery
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-lg shadow-lg bg-gray-900 cursor-pointer"
            onClick={() => setModalImg(src)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
      {modalImg && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setModalImg(null)}>
          <div className="relative max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-3xl font-bold z-10" onClick={() => setModalImg(null)}>&times;</button>
            <img src={modalImg} alt="Enlarged" className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 