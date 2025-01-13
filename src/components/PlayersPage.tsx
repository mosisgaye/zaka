"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {  Trophy, Star } from "lucide-react";

const players = [
  {
    name: "Wout Faes",
    position: "Centre Back",
    team: "Leicester City",
    image: "https://images.unsplash.com/photo-1624280157150-4d1ed8632989?auto=format&fit=crop&q=80&w=1000",
    stats: { goals: 3, assists: 2, matches: 28 }
  },
  {
    name: "Alessio Castro-Montes",
    position: "Wing Back",
    team: "RUSG Union",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1000",
    stats: { goals: 5, assists: 8, matches: 32 }
  },
  {
    name: "Youri Tielemans",
    position: "Centre Midfield",
    team: "Aston Villa",
    image: "https://images.unsplash.com/photo-1629374029669-aab2f060553b?auto=format&fit=crop&q=80&w=1000",
    stats: { goals: 7, assists: 12, matches: 34 }
  },
  {
    name: "Maxime Busi",
    position: "Wing Back",
    team: "Parma",
    image: "https://images.unsplash.com/photo-1605235186583-a8272b61f9fe?auto=format&fit=crop&q=80&w=1000",
    stats: { goals: 2, assists: 6, matches: 25 }
  },
  {
    name: "Jessi Pedro Da Silva",
    position: "Attacking Midfielder",
    team: "Club Brugge",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=1000",
    stats: { goals: 15, assists: 10, matches: 30 }
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Nos Joueurs d'Elite
            </h1>
            <p className="text-xl text-gray-300">
              Découvrez nos talents exceptionnels sur le terrain
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-2xl"
            >
              <div className="aspect-w-16 aspect-h-9 relative h-80">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h2 className="text-2xl font-bold text-white mb-2">{player.name}</h2>
                <p className="text-gray-300 mb-3">
                  {player.position} • {player.team}
                </p>

                <div className="grid grid-cols-3 gap-4 mt-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="flex flex-col items-center text-gray-300">
                    
                    <span className="text-sm">{player.stats.goals} Buts</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-300">
                    <Star className="w-6 h-6 mb-1 text-yellow-400" />
                    <span className="text-sm">{player.stats.assists} Passes</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-300">
                    <Trophy className="w-6 h-6 mb-1 text-yellow-400" />
                    <span className="text-sm">{player.stats.matches} Matchs</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}