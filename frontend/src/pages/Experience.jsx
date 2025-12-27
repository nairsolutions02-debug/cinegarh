import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Sparkles, Camera, Palette, Film } from 'lucide-react';
import { experienceGallery } from '../data/mock';

const Experience = () => {
  return (
    <div className="bg-[#0B1C2D] min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://customer-assets.emergentagent.com/job_6ed9519c-c2d4-4479-ba33-f1b01fcff0ad/artifacts/ngjf38ee_WhatsApp%20Image%202025-12-25%20at%2021.38.47.jpeg"
          alt="CINEGARH Experience"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/70 via-[#0B1C2D]/40 to-[#0B1C2D]"></div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Experience</h1>
          <p className="text-4xl md:text-6xl font-extralight text-white mb-6">Behind The Vision</p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Step into the world of CINEGARH. Explore the artistry, the process, and the passion behind every frame.
          </p>
        </div>
      </section>

      {/* Immersive Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Immersive Gallery</h2>
            <p className="text-3xl md:text-4xl font-extralight text-white">Explore Our Universe</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceGallery.map((item, index) => (
              <div
                key={item.id}
                className={`group relative rounded-lg overflow-hidden cursor-pointer ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                } ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`aspect-video ${index === 0 ? 'lg:aspect-square' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/30 to-transparent"></div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[#C9A24D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs tracking-[0.3em] uppercase text-[#C9A24D]">{item.type}</span>
                  <h3 className="text-xl font-light text-white mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {item.description}
                  </p>
                  
                  {/* Play Button */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="inline-flex items-center gap-2 text-[#C9A24D]">
                      <Play size={16} fill="currentColor" />
                      <span className="text-sm tracking-[0.2em] uppercase">Explore</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experimental Section */}
      <section className="py-24 px-6 bg-[#123A4A]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Experimental</h2>
            <p className="text-3xl md:text-4xl font-extralight text-white">Pushing Boundaries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'AI Visual Experiments',
                description: 'Exploring the intersection of artificial intelligence and cinematic storytelling.'
              },
              {
                icon: Palette,
                title: 'Concept Art Archives',
                description: 'Original paintings and sketches that shaped our visual universe.'
              },
              {
                icon: Film,
                title: 'World Building Notes',
                description: 'The detailed documents and maps that bring our fictional worlds to life.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-lg border border-white/10 hover:border-[#C9A24D]/30 bg-[#0B1C2D]/50 transition-all duration-500"
              >
                <item.icon className="w-10 h-10 text-[#C9A24D] mb-6" />
                <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#C9A24D] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind The Scenes CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Camera className="w-16 h-16 text-[#C9A24D] mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-6">
            Want to See More?
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Subscribe to our newsletter for exclusive behind-the-scenes content, early access to screenings, and updates on upcoming projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 bg-white/5 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-[#C9A24D]/50 transition-colors duration-300"
            />
            <button className="px-8 py-4 bg-[#C9A24D] rounded-full text-[#0B1C2D] font-medium hover:bg-[#d4b05e] transition-all duration-500">
              <span className="tracking-[0.1em] uppercase">Subscribe</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;