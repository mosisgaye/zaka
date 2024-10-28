import React from 'react';

const Banner = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden mt-4 py-40">
      {/* Background Image Grid */}
      <div className="absolute inset-0 gap-2 p-2 opacity-70">
        <div className="col-span-1">
          <img
            src="/banner1.webp"
            alt="Background Image"
            className="w-full h-full object-cover"
          />
        </div>
     
      </div>

      {/* Overlay pour le contenu */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            WE ARE INSPIRED BY YOUR FUTURE
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl">
            Claes Agency, een FIFA gelicentieerd voetbalagentschap, ondersteunt
            een selecte groep atleten met een exclusief aanbod van op maat
            gemaakte diensten.
          </p>
          <div className="flex space-x-4 justify-center">
            <button className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
              CONTACTEZ NOUS
            </button>
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded hover:bg-gray-800 transition">
              ONTDEK ONZE 'WAAROM'
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
