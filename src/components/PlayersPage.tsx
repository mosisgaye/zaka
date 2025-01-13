import Image from "next/image";

const players = [
  {
    name: "Wout Faes",
    position: "Centre Back",
    team: "Leicester City",
    image: "/images/wout-faes.jpg", // Remplacez par le chemin réel
  },
  {
    name: "Alessio Castro-Montes",
    position: "Wing Back",
    team: "RUSG Union",
    image: "/images/alessio-castro.jpg", // Remplacez par le chemin réel
  },
  {
    name: "Youri Tielemans",
    position: "Centre Midfield",
    team: "Aston Villa",
    image: "/images/youri-tielemans.jpg", // Remplacez par le chemin réel
  },
  {
    name: "Maxime Busi",
    position: "Wing Back",
    team: "Parma",
    image: "/images/maxime-busi.jpg", // Remplacez par le chemin réel
  },
  {
    name: "Jessi Pedro Da Silva",
    position: "Attacking Midfielder",
    team: "Club Brugge",
    image: "/images/jessi-pedro.jpg", // Remplacez par le chemin réel
  },
  {
    name: "Jessi Pedro Da Silva",
    position: "Attacking Midfielder",
    team: "Club Brugge",
    image: "/images/jessi-pedro.jpg", // Remplacez par le chemin réel
  },
];

export default function PlayersPage() {
  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Players</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20">
        {players.map((player, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-black rounded-lg shadow-lg group"
          >
            <Image
              src={player.image}
              alt={player.name}
              width={400}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black group-hover:via-black/70 transition-all duration-300 flex flex-col justify-end p-4">
              <h2 className="text-xl font-bold text-white">{player.name}</h2>
              <p className="text-sm text-gray-300">
                {player.position} <br /> {player.team}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
