import Image from "next/image";

const Aboutme = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold"> Why does Zaka Agency exist?</h1>
          <p className="text-xl text-black leading-relaxed">
            We love the game! We believe that players and parents deserve the
            best level of guidance, representation and protection. Our vision is
            to help and push athletes to reach their full potential. Our mission
            is to assist our players in their quest to winning trophies and
            create legacies, by showing and supporting them the path to success.
            We are ‘inspired by their future’.
          </p>
          <button className="bg-yellow-400 text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
            Email Me
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about1.webp"
            alt="Tom with baby"
            layout="responsive"
            width={800}
            height={800}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
