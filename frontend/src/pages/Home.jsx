import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { originals, albums, communityHighlights, philosophyWords } from '../data/mock';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeOriginal, setActiveOriginal] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [visibleWords, setVisibleWords] = useState([]);
  const originalsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate philosophy words
    philosophyWords.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords(prev => [...prev, index]);
      }, 500 + index * 300);
    });
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#0B1C2D]">
      {/* Hero Section - Fullscreen Portal */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D] via-[#123A4A]/30 to-[#0B1C2D]"></div>
          
          {/* Animated Light Portal */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` }}
          >
            {/* Core Gold Light */}
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-[#C9A24D]/20 blur-3xl animate-pulse-slow"></div>
              <div className="absolute inset-8 rounded-full bg-[#C9A24D]/30 blur-2xl animate-pulse-slower"></div>
              <div className="absolute inset-16 rounded-full bg-[#C9A24D]/40 blur-xl animate-pulse-slow"></div>
              <div className="absolute inset-24 rounded-full bg-[#C9A24D]/60 blur-lg"></div>
              
              {/* Light Rays */}
              <div className="absolute inset-0 animate-spin-slow">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-32 md:h-48 bg-gradient-to-t from-[#C9A24D]/60 to-transparent origin-bottom"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#C9A24D]/40 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div 
          className="relative z-10 text-center px-6"
          style={{ 
            opacity: isHeroVisible ? 1 : 0,
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'opacity 0.8s ease-in-out'
          }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.3em] text-white mb-6 animate-fade-in">
            CINEGARH
          </h1>
          <p className="text-lg md:text-xl text-[#C9A24D] tracking-[0.3em] uppercase mb-12 animate-fade-in-delay">
            Stories That Echo Beyond Time
          </p>
          <button
            onClick={scrollToContent}
            className="group inline-flex flex-col items-center gap-4 text-white/60 hover:text-[#C9A24D] transition-all duration-700 animate-fade-in-delay-2"
          >
            <span className="text-sm tracking-[0.3em] uppercase">Enter Cinegarh</span>
            <ChevronDown 
              size={24} 
              className="animate-bounce-slow group-hover:translate-y-1 transition-transform duration-500" 
            />
          </button>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="absolute bottom-8 right-8 text-white/40 hover:text-[#C9A24D] transition-colors duration-500"
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 md:py-48 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-extralight text-white/80 leading-relaxed mb-16">
            We believe in the power of <span className="text-[#C9A24D]">cinema</span> to transform,
            to illuminate the <span className="text-[#C9A24D]">shadows</span> of human experience.
          </p>
          
          {/* Floating Keywords */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {philosophyWords.map((word, index) => (
              <span
                key={word}
                className={`text-sm tracking-[0.4em] uppercase transition-all duration-1000 ${
                  visibleWords.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  color: index % 2 === 0 ? '#C9A24D' : 'rgba(255,255,255,0.4)',
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Originals Showcase */}
      <section className="relative py-24 overflow-hidden" ref={originalsRef}>
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Originals</h2>
              <p className="text-3xl md:text-4xl font-extralight text-white">Enter Our Universe</p>
            </div>
            <Link 
              to="/originals" 
              className="hidden md:flex items-center gap-2 text-white/60 hover:text-[#C9A24D] transition-colors duration-500 group"
            >
              <span className="text-sm tracking-[0.2em] uppercase">View All</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 px-6 scrollbar-hide snap-x snap-mandatory">
            {originals.map((item, index) => (
              <Link
                key={item.id}
                to={`/originals/${item.id}`}
                className={`group relative flex-shrink-0 w-72 md:w-96 snap-center transition-all duration-700 ${
                  activeOriginal === index ? 'scale-105' : 'scale-100'
                }`}
                onMouseEnter={() => setActiveOriginal(index)}
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/30 to-transparent"></div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-[#C9A24D]/10"></div>
                    <div className="absolute inset-0 border border-[#C9A24D]/30 rounded-lg"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs tracking-[0.3em] uppercase text-[#C9A24D]">{item.type}</span>
                    <h3 className="text-xl font-light text-white mt-2 mb-1">{item.title}</h3>
                    <p className="text-sm text-white/50 line-clamp-2">{item.tagline}</p>
                    
                    {/* Play Button */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="inline-flex items-center gap-2 text-[#C9A24D] text-sm">
                        <Play size={16} fill="currentColor" />
                        <span className="tracking-[0.2em] uppercase">Explore</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {originals.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveOriginal(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  activeOriginal === index 
                    ? 'bg-[#C9A24D] w-8' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Records Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_6ed9519c-c2d4-4479-ba33-f1b01fcff0ad/artifacts/905k2b9k_WhatsApp%20Image%202025-12-25%20at%2021.38.47%20%281%29.jpeg"
            alt="CINEGARH Records"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D] via-[#0B1C2D]/80 to-[#0B1C2D]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Cinegarh Records</h2>
              <p className="text-3xl md:text-5xl font-extralight text-white mb-6">Sound of Cinema</p>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Experience the sonic landscapes that bring our stories to life. 
                Original scores, soundtracks, and musical journeys crafted for the screen.
              </p>
              <Link
                to="/records"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] hover:bg-[#C9A24D]/20 transition-all duration-500 group"
              >
                <span className="text-sm tracking-[0.2em] uppercase">Explore Records</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Album Preview Grid */}
            <div className="grid grid-cols-2 gap-4">
              {albums.slice(0, 3).map((album, index) => (
                <Link
                  key={album.id}
                  to={`/records/${album.id}`}
                  className={`group relative aspect-square rounded-lg overflow-hidden ${
                    index === 0 ? 'col-span-2' : ''
                  }`}
                >
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/90 to-transparent"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#C9A24D]/10"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-light text-white">{album.title}</h4>
                    <p className="text-sm text-white/50">{album.artist}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Experience</h2>
            <p className="text-3xl md:text-4xl font-extralight text-white">Behind The Vision</p>
          </div>

          {/* Featured Experience Image */}
          <div className="relative">
            <img
              src="https://customer-assets.emergentagent.com/job_6ed9519c-c2d4-4479-ba33-f1b01fcff0ad/artifacts/ngjf38ee_WhatsApp%20Image%202025-12-25%20at%2021.38.47.jpeg"
              alt="CINEGARH Originals Experience"
              className="w-full h-[60vh] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-[#0B1C2D]/30 rounded-lg"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <Link
                to="/experience"
                className="inline-flex items-center gap-3 text-[#C9A24D] group"
              >
                <div className="w-16 h-16 rounded-full border border-[#C9A24D]/50 flex items-center justify-center group-hover:bg-[#C9A24D]/10 transition-all duration-500">
                  <Play size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm tracking-[0.3em] uppercase">Explore</p>
                  <p className="text-lg text-white">Immersive Gallery</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative py-32 bg-[#123A4A]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Community</h2>
              <p className="text-3xl md:text-4xl font-extralight text-white mb-6">Join The Universe</p>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Our community of creators, fans, and visionaries shapes the CINEGARH universe. 
                Share your stories, your art, your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/community"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A24D] rounded-full text-[#0B1C2D] font-medium hover:bg-[#d4b05e] transition-all duration-500"
                >
                  <span className="text-sm tracking-[0.1em] uppercase">Submit Your Work</span>
                </Link>
                <Link
                  to="/community"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] hover:bg-[#C9A24D]/10 transition-all duration-500"
                >
                  <span className="text-sm tracking-[0.1em] uppercase">View Gallery</span>
                </Link>
              </div>
            </div>

            {/* Community Grid */}
            <div className="grid grid-cols-2 gap-4">
              {communityHighlights.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative aspect-square rounded-lg overflow-hidden cursor-pointer ${
                    index === 0 ? 'row-span-2' : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/90 via-[#0B1C2D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-xs tracking-[0.2em] uppercase text-[#C9A24D]">{item.type}</span>
                    <h4 className="text-white font-light">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.creator}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;