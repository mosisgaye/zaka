import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070"
        alt="Santiago Bernabéu Stadium"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to Agency Zakka 77
            </h1>
            <p className="text-lg mb-8">
            Zaka 77 Agency, een FIFA gelicentieerd voetbalagentschap, ondersteunt een selecte groep atleten met een exclusief aanbod van op maat gemaakte diensten.
            </p>
            <div className="flex gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-500 h-11 rounded-md px-8">
                Contact
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent hover:bg-white hover:text-black h-11 rounded-md px-8">
                Watch Highlights
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
