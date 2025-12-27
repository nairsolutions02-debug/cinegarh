import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Play, Pause, ArrowLeft, Music, Clock } from 'lucide-react';
import { albums } from '../data/mock';

// Records Listing Page
export const RecordsPage = () => {
  const [hoveredAlbum, setHoveredAlbum] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);

  return (
    <div className="bg-[#0B1C2D] min-h-screen">
      {/* Hero with Vinyl Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://customer-assets.emergentagent.com/job_6ed9519c-c2d4-4479-ba33-f1b01fcff0ad/artifacts/905k2b9k_WhatsApp%20Image%202025-12-25%20at%2021.38.47%20%281%29.jpeg"
          alt="CINEGARH Records"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/60 via-[#0B1C2D]/40 to-[#0B1C2D]"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Cinegarh Records</h1>
          <p className="text-4xl md:text-6xl font-extralight text-white">Sound of Cinema</p>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <Link
                key={album.id}
                to={`/records/${album.id}`}
                className="group"
                onMouseEnter={() => setHoveredAlbum(album.id)}
                onMouseLeave={() => setHoveredAlbum(null)}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Vinyl Effect on Hover */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    hoveredAlbum === album.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 bg-[#0B1C2D]/60"></div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsPlaying(isPlaying === album.id ? null : album.id);
                      }}
                      className="relative z-10 w-20 h-20 rounded-full bg-[#C9A24D] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      {isPlaying === album.id ? (
                        <Pause size={32} className="text-[#0B1C2D]" fill="currentColor" />
                      ) : (
                        <Play size={32} className="text-[#0B1C2D] ml-1" fill="currentColor" />
                      )}
                    </button>
                  </div>

                  {/* Rotating Vinyl Animation */}
                  <div className={`absolute -right-1/3 top-1/2 -translate-y-1/2 w-full h-full transition-all duration-700 ${
                    hoveredAlbum === album.id ? 'translate-x-1/4' : 'translate-x-0'
                  }`}>
                    <div className={`w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center ${
                      isPlaying === album.id ? 'animate-spin-slow' : ''
                    }`}>
                      <div className="w-1/3 h-1/3 rounded-full bg-[#C9A24D]/30"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light text-white group-hover:text-[#C9A24D] transition-colors duration-300">
                    {album.title}
                  </h3>
                  <p className="text-white/50">{album.artist}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-white/30">
                    <span>{album.year}</span>
                    <span>•</span>
                    <span>{album.tracks.length} tracks</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Album Detail Page
export const RecordDetail = () => {
  const { id } = useParams();
  const album = albums.find(a => a.id === parseInt(id));
  const [playingTrack, setPlayingTrack] = useState(null);

  if (!album) {
    return (
      <div className="bg-[#0B1C2D] min-h-screen pt-32 flex items-center justify-center">
        <p className="text-white/50">Album not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0B1C2D] min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/records"
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#C9A24D] transition-colors duration-500 group mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm tracking-[0.2em] uppercase">Back to Records</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Album Art */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Soundwave Visualization */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-1 h-16">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 bg-[#C9A24D] rounded-full transition-all duration-300 ${
                    playingTrack !== null ? 'animate-soundwave' : 'h-2'
                  }`}
                  style={{
                    height: playingTrack !== null ? `${Math.random() * 100}%` : '8px',
                    animationDelay: `${i * 50}ms`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Album Info */}
          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-[#C9A24D]">
              {album.year}
            </span>
            <h1 className="text-4xl md:text-5xl font-extralight text-white mt-2 mb-4">
              {album.title}
            </h1>
            <p className="text-xl text-white/60 mb-8">{album.artist}</p>
            
            {/* Story */}
            <div className="mb-12">
              <h3 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-3">Story Behind The Sound</h3>
              <p className="text-white/70 leading-relaxed">{album.story}</p>
            </div>

            {/* Tracklist */}
            <div>
              <h3 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">Tracklist</h3>
              <div className="space-y-4">
                {album.tracks.map((track, index) => (
                  <button
                    key={index}
                    onClick={() => setPlayingTrack(playingTrack === index ? null : index)}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                      playingTrack === index 
                        ? 'bg-[#C9A24D]/20 border border-[#C9A24D]/30' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      playingTrack === index ? 'bg-[#C9A24D]' : 'bg-white/10'
                    }`}>
                      {playingTrack === index ? (
                        <Pause size={16} className="text-[#0B1C2D]" fill="currentColor" />
                      ) : (
                        <Play size={16} className={playingTrack === index ? 'text-[#0B1C2D]' : 'text-white/60'} fill="currentColor" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`font-light ${
                        playingTrack === index ? 'text-[#C9A24D]' : 'text-white'
                      }`}>
                        {track.title}
                      </p>
                    </div>
                    <span className="text-white/40 text-sm">{track.duration}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordsPage;