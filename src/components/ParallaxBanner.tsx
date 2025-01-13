'use client'

import React, { useEffect, useState } from "react";

type ParallaxBannerProps = {
  backgroundImage: string;
  overlayText: string;
  height?: string; // Permet de personnaliser la hauteur
};

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  backgroundImage,
  overlayText,
  height = "60vh",
}) => {
  const [offsetY, setOffsetY] = useState(0);

  // Gestion du défilement pour l'effet parallaxe
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden`}
      style={{ height }} // Hauteur dynamique
    >
      {/* Image de fond avec effet de parallaxe */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offsetY * 0.5}px)`, // Le ratio 0.5 ajuste l'intensité de l'effet parallaxe
        }}
      ></div>

      {/* Overlay pour le texte */}
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-40">
        <h1 className="text-4xl font-bold text-white">{overlayText}</h1>
      </div>
    </div>
  );
};

export default ParallaxBanner;
