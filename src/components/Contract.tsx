"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "../utils/animation";

export default function ContractNegotiation() {
  return (
    <motion.section
      variants={fadeInUp}
      className="container mx-auto px-6 py-20 lg:px-12 grid lg:grid-cols-2 gap-12 items-center"
    >
      <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Contract Negotiation"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="order-1 lg:order-2 space-y-6">
        <div className="inline-flex items-center space-x-2 text-blue-600 mb-2">
          <span className="text-sm font-semibold tracking-wider uppercase">Contract Negotiation</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Maximizing Your Professional Value
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our contract negotiation expertise is enriched by years of experience from both management and agent perspectives. We prioritize maximizing contract value while maintaining complete transparency and making strategic decisions that benefit our clients long-term.
        </p>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
            <p>Strategic contract optimization</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
            <p>Complete transparency throughout the process</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
            <p>Family-focused approach to negotiations</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          <span>Ask for more information</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.section>
  );
}
