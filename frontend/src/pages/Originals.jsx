import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Play, ArrowLeft, Clock, Users, Calendar, ArrowRight } from 'lucide-react';
import { originals } from '../data/mock';

// Originals Listing Page
export const OriginalsPage = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Film', 'Series', 'Short', 'Experimental'];

  const filteredOriginals = filter === 'All' 
    ? originals 
    : originals.filter(item => item.type === filter);

  return (
    <div className="bg-[#0B1C2D] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Originals</h1>
          <p className="text-4xl md:text-5xl font-extralight text-white">Our Universe</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-3 rounded-full text-sm tracking-[0.2em] uppercase transition-all duration-500 ${
                filter === item
                  ? 'bg-[#C9A24D] text-[#0B1C2D]'
                  : 'border border-white/20 text-white/60 hover:border-[#C9A24D]/50 hover:text-[#C9A24D]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOriginals.map((item) => (
            <Link
              key={item.id}
              to={`/originals/${item.id}`}
              className="group relative"
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Grain Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-noise"></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/30 to-transparent"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-[#C9A24D]/5"></div>
                  <div className="absolute inset-0 border-2 border-[#C9A24D]/30 rounded-lg"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-[0.3em] uppercase text-[#C9A24D]">{item.type}</span>
                    <span className="text-xs text-white/40">•</span>
                    <span className="text-xs text-white/40">{item.year}</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 line-clamp-2">{item.tagline}</p>
                  
                  {/* Hover Content */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.genre.map((g) => (
                        <span key={g} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">
                          {g}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-[#C9A24D]">
                      <Play size={16} fill="currentColor" />
                      <span className="text-sm tracking-[0.2em] uppercase">Explore</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Original Detail Page
export const OriginalDetail = () => {
  const { id } = useParams();
  const original = originals.find(o => o.id === parseInt(id));

  if (!original) {
    return (
      <div className="bg-[#0B1C2D] min-h-screen pt-32 flex items-center justify-center">
        <p className="text-white/50">Project not found</p>
      </div>
    );
  }

  const relatedWorks = originals.filter(o => o.id !== original.id).slice(0, 3);

  return (
    <div className="bg-[#0B1C2D] min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh]">
        <img
          src={original.hero}
          alt={original.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/80 to-transparent"></div>

        {/* Back Button */}
        <Link
          to="/originals"
          className="absolute top-32 left-6 lg:left-12 flex items-center gap-2 text-white/60 hover:text-[#C9A24D] transition-colors duration-500 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm tracking-[0.2em] uppercase">Back to Originals</span>
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-16 left-6 lg:left-12 right-6 lg:right-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1 bg-[#C9A24D] text-[#0B1C2D] text-xs tracking-[0.3em] uppercase rounded-full">
                {original.type}
              </span>
              {original.duration && (
                <span className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock size={14} />
                  {original.duration}
                </span>
              )}
              {original.episodes && (
                <span className="text-white/60 text-sm">{original.episodes} Episodes</span>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight text-white mb-4">{original.title}</h1>
            <p className="text-xl text-[#C9A24D] mb-6">{original.tagline}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {original.genre.map((g) => (
                <span key={g} className="px-4 py-2 border border-white/20 rounded-full text-sm text-white/70">
                  {g}
                </span>
              ))}
            </div>

            <button className="inline-flex items-center gap-4 px-8 py-4 bg-[#C9A24D] rounded-full text-[#0B1C2D] font-medium hover:bg-[#d4b05e] transition-all duration-500 group">
              <Play size={20} fill="currentColor" />
              <span className="tracking-[0.1em] uppercase">Watch Trailer</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Story</h2>
              <p className="text-xl text-white/80 leading-relaxed mb-16">
                {original.synopsis}
              </p>

              {/* Gallery */}
              <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-6">Gallery</h2>
              <div className="grid grid-cols-2 gap-4 mb-16">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img src={original.hero} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img src={original.poster} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-32 space-y-8">
                {/* Director */}
                <div>
                  <h3 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-2">Director</h3>
                  <p className="text-lg text-white">{original.director}</p>
                </div>

                {/* Cast */}
                {original.cast.length > 0 && (
                  <div>
                    <h3 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-2">Cast</h3>
                    <div className="space-y-2">
                      {original.cast.map((actor) => (
                        <p key={actor} className="text-white/70">{actor}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Year */}
                <div>
                  <h3 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-2">Year</h3>
                  <p className="text-lg text-white">{original.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Works */}
      <section className="py-24 px-6 lg:px-12 bg-[#123A4A]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-8">Related Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedWorks.map((item) => (
              <Link key={item.id} to={`/originals/${item.id}`} className="group">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] to-transparent"></div>
                </div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#C9A24D]">{item.type}</span>
                <h3 className="text-lg text-white group-hover:text-[#C9A24D] transition-colors duration-300">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OriginalsPage;