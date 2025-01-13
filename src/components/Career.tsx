"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { fadeInUp } from "@/utils/animation";

const CareerPlanning = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="container mx-auto px-6 py-10 lg:px-12 grid lg:grid-cols-2 gap-12 items-center"
    >
      <div className="space-y-6">
        <div className="inline-flex items-center space-x-2 text-blue-600 mb-2">
          <Briefcase className="w-5 h-5" />
          <span className="text-sm font-semibold tracking-wider uppercase">Career Planning</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Building Your Path to Professional Success
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are committed to guiding players and their families through comprehensive career planning that aligns with their personal ambitions. Led by Bob Claes, former CEO with extensive global networks, our team brings deep insights into market trends, club dynamics, and player development strategies.
        </p>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
            <p>Expert guidance from industry veterans</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
            <p>Global network of professional connections</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
            <p>Personalized development strategies</p>
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
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80"
          alt="Career Planning"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </motion.section>
  );
};

export default CareerPlanning;
