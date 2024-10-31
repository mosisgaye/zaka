// components/Section.tsx
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-12 text-center bg-white w-full">
      <h2 className="text-xl font-bold md:text-3xl lg:text-4xl mb-6 text-gold">
        KWALITEIT KOMT OP DE EERSTE PLAATS. IN ALLES WAT WE DOEN. ALTIJD.
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {[
          {
            title: 'WAAROM BESTAAN WE?',
            buttonText: "Ontdek onze 'WAAROM'",
            imgSrc: '/joueur1.webp', // Remplacez par votre image
          },
          {
            title: 'HOE WERKEN WE?',
            buttonText: "Ontdek onze 'HOE'",
            imgSrc: '/joueur2.webp', // Remplacez par votre image
          },
          {
            title: 'WAT HEBBEN WE TE BIEDEN?',
            buttonText: "Ontdek onze 'WAT'",
            imgSrc: '/joueur3.webp', // Remplacez par votre image
          },
        ].map((item, index) => (
          <div key={index} className="max-w-sm mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
            <button className="mt-2 px-4 py-2 font-medium text-black bg-gold rounded-md bg-[#FFD700] transition duration-300">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
