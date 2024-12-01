import Image from "next/image";

export default function FootballSchoolSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">We Protect Our Players and Coaches at All Levels. Always.</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  alt={card.alt}
                  src={card.image}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                {card.button && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-16 w-16 rounded-full transition-transform duration-300 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-play h-8 w-8"
                      >
                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    title: "Moments Forts",
    description: "Découvrez les moments forts des matchs de nos jeunes talents",
    image: "https://images.unsplash.com/photo-1623595119708-26b1f7300075?q=80&w=2070",
    alt: "Young player scoring a goal",
    button: true,
  },
  {
    title: "Nos Coachs",
    description: "Nos coachs expérimentés, au service de votre progression",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2069",
    alt: "Coach training young players",
    button: false,
  },
  {
    title: "Devenir Pro",
    description: "Devenir professionnel : une opportunité offerte par notre école",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070",
    alt: "Professional player from our academy",
    button: false,
  },
  {
    title: "Moments Forts",
    description: "Découvrez les moments forts des matchs de nos jeunes talents",
    image: "https://images.unsplash.com/photo-1623595119708-26b1f7300075?q=80&w=2070",
    alt: "Young player scoring a goal",
    button: true,
  },
  {
    title: "Moments Forts",
    description: "Découvrez les moments forts des matchs de nos jeunes talents",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070",
    alt: "Young player scoring a goal",
    button: true,
  },
  {
    title: "Moments Forts",
    description: "Découvrez les moments forts des matchs de nos jeunes talents",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070",
    alt: "Young player scoring a goal",
    button: true,
  },
];
