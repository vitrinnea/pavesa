// ImageHoverSection.jsx
import React, { useState } from 'react';

const ImageHoverSection = () => {
  // Array de imágenes (ejemplos)
  const images = [
    {
      id: 1,
      src: '/images/concrete-truck.jpg',
      alt: 'Suministro y bombeo de concreto premezclado',
      title: 'Suministro y bombeo de concreto premezclado en El Salvador',
    },
    {
      id: 2,
      src: '/images/road-work.jpg',
      alt: 'Construcción de carreteras',
      title: 'Construcción y mantenimiento de infraestructura vial',
    },
    {
      id: 3,
      src: '/images/construction-detail.jpg',
      alt: 'Detalles de construcción',
      title: 'Servicios de ingeniería y construcción especializada',
    },
    {
      id: 4,
      src: '/images/excavator.jpg',
      alt: 'Excavadora en operación',
      title: 'Movimiento de tierras y excavaciones',
    },
  ];

  // Estado para controlar qué imagen está activa con hover
  const [activeImageId, setActiveImageId] = useState(null);

  return (
    <section className="image-hover-section py-12 bg-dark-green">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Nuestros Servicios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden transition-all duration-300 ease-in-out"
              onMouseEnter={() => setActiveImageId(image.id)}
              onMouseLeave={() => setActiveImageId(null)}
              style={{
                height: '300px',
                transform: activeImageId === image.id ? 'scale(1.1)' : 'scale(1)',
                zIndex: activeImageId === image.id ? '10' : '1',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />

              {/* Overlay con texto */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageHoverSection;
