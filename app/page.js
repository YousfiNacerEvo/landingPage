"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center py-12 px-4 sm:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Image médecin visible en haut */}
      <img
        src="/medecin.png"
        alt="Médecin illustratif"
        className="mx-auto mb-8 w-[220px] sm:w-[300px] md:w-[340px] h-auto z-10 relative drop-shadow-xl rounded-2xl"
        style={{objectFit: 'contain'}}
      />

      {/* Offre */}
      <section className="max-w-2xl w-full mb-12 text-center relative z-10 transform hover:scale-105 transition-transform duration-300">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Vous gérez un cabinet médical en Algérie ?  On vous offre un site web pro (valeur 40.000 DA) mais pour vous <strong>GRATUITEMENT</strong> !
          </h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nous créons <strong>gratuitement </strong> un site moderne et professionnel pour votre cabinet.
          Sans frais, sans engagement. En échange ? Juste votre avis honnête après livraison.
          </p>
          <p className="text-md text-gray-600 leading-relaxed">
          Remplissez le formulaire ci-dessous et profitez de l’offre Dès maintenant .
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="max-w-2xl w-full mb-12 relative z-10 flex justify-center transform hover:scale-105 transition-transform duration-300">
        <div className="w-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Contactez-moi</h2>
          <form
            action="https://formspree.io/f/xyzjaeyq"
            method="POST"
            className="flex flex-col gap-6"
          >
            <div className="group">
              <label htmlFor="nom" className="block text-sm font-semibold mb-2 text-blue-100">Nom</label>
              <input 
                type="text" 
                id="nom" 
                name="nom" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm" 
                placeholder="Votre nom"
                required 
              />
            </div>
            <div className="group">
              <label htmlFor="prenom" className="block text-sm font-semibold mb-2 text-blue-100">Prénom</label>
              <input 
                type="text" 
                id="prenom" 
                name="prenom" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm" 
                placeholder="Votre prénom"
                required 
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-blue-100">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm" 
                placeholder="votre@email.com"
                required 
              />
            </div>
            <div className="group">
              <label htmlFor="numero" className="block text-sm font-semibold mb-2 text-blue-100">Numéro</label>
              <input 
                type="tel" 
                id="numero" 
                name="numero" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm" 
                placeholder="Votre numéro"
                required 
              />
            </div>
            <button 
              type="submit" 
              className="mt-4 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Projets */}
      <section className="max-w-2xl w-full relative z-10 transform hover:scale-105 transition-transform duration-300">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes projets
          </h2>
          <div className="grid gap-4">
            <a
              href="https://oftalmo-page.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 relative group"
            >
              <img
                src="/ofta.webp"
                alt="Projet 1"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:bg-black/60 transition-all">
                <span className="text-white text-lg font-semibold drop-shadow-lg">Site d'exemple pour ophtalmologue</span>
              </div>
            </a>
            
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
