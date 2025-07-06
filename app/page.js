"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex flex-col items-center py-16 px-4 sm:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      {/* Header Section */}
      <div className="max-w-4xl w-full mb-16 text-center relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Site Web Professionnel
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pour Votre Cabinet
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Créons ensemble votre <span className="text-cyan-400 font-semibold">présence digitale</span> moderne et professionnelle. 
              <br />
              <span className="text-2xl font-bold text-white mt-2 block">
                Offert gratuitement pour les cabinets médicaux en Algérie
              </span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg">
                ✓ Site moderne et responsive
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg">
                ✓ Design professionnel
              </div>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg">
                ✓ 100% gratuit
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="max-w-4xl w-full mb-16 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Découvrez Notre Expertise
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-auto max-h-96"
              controls
              preload="metadata"
              poster="/medecin.png"
            >
              <source src="/myku.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl w-full mb-16 relative z-10">
        <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Commencez Votre Projet
          </h2>
          <form
            action="https://formspree.io/f/xyzjaeyq"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="nom" className="block text-sm font-semibold mb-3 text-cyan-200">Nom</label>
                <input 
                  type="text" 
                  id="nom" 
                  name="nom" 
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-lg" 
                  placeholder="Votre nom"
                  required 
                />
              </div>
              <div className="group">
                <label htmlFor="prenom" className="block text-sm font-semibold mb-3 text-cyan-200">Prénom</label>
                <input 
                  type="text" 
                  id="prenom" 
                  name="prenom" 
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-lg" 
                  placeholder="Votre prénom"
                  required 
                />
              </div>
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold mb-3 text-cyan-200">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-lg" 
                placeholder="votre@email.com"
                required 
              />
            </div>
            <div className="group">
              <label htmlFor="numero" className="block text-sm font-semibold mb-3 text-cyan-200">Numéro de téléphone</label>
              <input 
                type="tel" 
                id="numero" 
                name="numero" 
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-lg" 
                placeholder="Votre numéro"
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            >
              Demander Mon Site Gratuit
            </button>
          </form>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-6xl w-full relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Nos Réalisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://oftalmo-page.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src="/ofta.webp"
                  alt="Site ophtalmologue"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-xl font-bold mb-2">Cabinet d'Ophtalmologie</h3>
                    <p className="text-gray-200 text-sm">Site moderne et professionnel</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a
              href="https://dentiste-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src="/dentiste.avif"
                  alt="Site dentiste"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-xl font-bold mb-2">Cabinet Dentaire</h3>
                    <p className="text-gray-200 text-sm">Design élégant et fonctionnel</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
