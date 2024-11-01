// components/ImageGrid.tsx
import React from 'react';

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: '/image1.jpg', alt: 'Image 1' },
  { src: '/image2.jpg', alt: 'Image 2' },
  { src: '/image3.jpg', alt: 'Image 3' },
  { src: '/image4.jpg', alt: 'Image 4' },
  { src: '/image5.jpg', alt: 'Image 5' },
  { src: '/image6.jpg', alt: 'Image 6' },
  { src: '/image7.jpg', alt: 'Image 7' },
  { src: '/image8.jpg', alt: 'Image 8' }, ]


const ImageGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        We Protect Our Players and Coaches at All Levels. Always.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Advanced Feature Placeholder: Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300">
              <p className="text-lg font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
