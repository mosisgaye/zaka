import React from 'react';

const Banner = () => {
  return (
    <section className="relative text-white overflow-hidden mt-1 py-40">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/team.jpg"
          alt="Background Image"
          className="w-full h-full object-cover filter brightness-125" // Ajuste la luminosité de l'image
        />
      </div>

      {/* Overlay pour le filtre */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu principal */}
      <div className="relative z-10 flex items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            WE ARE INSPIRED BY YOUR FUTURE
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-white opacity-90">
            Zaka 77 Agency, een FIFA gelicentieerd voetbalagentschap, ondersteunt
            een selecte groep atleten met een exclusief aanbod van op maat
            gemaakte diensten.
          </p>
          <div className="flex space-x-4 justify-center">
            <button className="bg-white text-black font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-200 transition">
              CONTACTEN
            </button>
            <button className="bg-transparent border border-[#FFD700] text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-800 transition">
              ONTDEK ONZE 'WAAROM'
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
