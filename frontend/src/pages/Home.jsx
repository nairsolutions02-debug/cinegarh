import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, ArrowRight, ArrowLeft, Volume2, VolumeX, Film, Music, Sparkles, Users, Award, Calendar, TrendingUp, Handshake, DollarSign, Truck, Zap, Mail, MapPin } from 'lucide-react';
import { originals, albums, communityHighlights } from '../data/mock';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeOriginal, setActiveOriginal] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const projectsData = [
    { id: 1, title: "THE SILENT ECHO", genre: "SCI-FI", year: "2026", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80" },
    { id: 2, title: "MIDNIGHT PROTOCOL", genre: "THRILLER", type: "SERIES", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80" },
    { id: 3, title: "SANDS OF TIME", genre: "DRAMA", year: "2025", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80" },
    { id: 4, title: "NEON GENESIS", genre: "DOCUMENTARY", type: "SHORT", image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80" },
  ];

  const filters = ['ALL', 'FEATURE FILMS', 'SERIES', 'DOCUMENTARY'];

  return (
    <div className="bg-[#0B1C2D]">
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D] via-[#123A4A]/30 to-[#0B1C2D]"></div>
          
          {/* Animated Light Portal */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` }}
          >
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
                    style={{ transform: `translate(-50%, -100%) rotate(${i * 45}deg)` }}
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
                  left: `${(i * 3.33) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${5 + (i % 5)}s`,
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
            <span className="text-sm tracking-[0.3em] uppercase">Enter The Universe</span>
            <ChevronDown size={24} className="animate-bounce-slow group-hover:translate-y-1 transition-transform duration-500" />
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

      {/* ========== VISION SECTION ========== */}
      <section id="vision" data-animate className="relative py-40 px-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-16 bg-[#C9A24D]/30"></div>
        </div>
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#C9A24D]"></div>
            <span className="text-sm tracking-[0.4em] uppercase text-[#C9A24D]">Vision</span>
            <div className="w-12 h-px bg-[#C9A24D]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            CINEMA IS NOT WATCHED.
          </h2>
          <p className="text-2xl md:text-3xl font-light text-[#C9A24D] mt-4">
            IT IS FELT.
          </p>
        </div>
      </section>

      {/* ========== THREE PILLARS SECTION ========== */}
      <section id="pillars" data-animate className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.pillars ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#C9A24D]"></div>
              <span className="text-sm tracking-[0.4em] uppercase text-[#C9A24D]">The Universe</span>
              <div className="w-12 h-px bg-[#C9A24D]"></div>
            </div>
            <p className="text-white/60 tracking-[0.2em] uppercase">Three Pillars of Storytelling</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Originals */}
            <div className={`group relative overflow-hidden rounded-lg transition-all duration-1000 delay-100 ${visibleSections.pillars ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1C2D]/50 to-[#0B1C2D]"></div>
              <div className="absolute top-4 right-4 text-8xl font-bold text-white/5">01</div>
              <div className="relative p-8 h-full min-h-[400px] flex flex-col justify-end border border-white/10 rounded-lg hover:border-[#C9A24D]/30 transition-colors duration-500">
                <Film className="w-12 h-12 text-[#C9A24D] mb-6" />
                <h3 className="text-2xl font-light text-white mb-4">ORIGINALS</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Immersive narrative worlds crafted for the screen. Stories that linger long after the credits roll.
                </p>
                <div className="space-y-2">
                  <Link to="/originals" className="block text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#C9A24D] transition-colors duration-300">Feature Films</Link>
                  <Link to="/originals" className="block text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#C9A24D] transition-colors duration-300">Original Series</Link>
                  <Link to="/originals" className="block text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#C9A24D] transition-colors duration-300">Short Films</Link>
                </div>
              </div>
            </div>

            {/* Pillar 2: Records */}
            <div className={`group relative overflow-hidden rounded-lg transition-all duration-1000 delay-200 ${visibleSections.pillars ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1C2D]/50 to-[#0B1C2D]"></div>
              <div className="absolute top-4 right-4 text-8xl font-bold text-white/5">02</div>
              <div className="relative p-8 h-full min-h-[400px] flex flex-col justify-end border border-white/10 rounded-lg hover:border-[#C9A24D]/30 transition-colors duration-500">
                <Music className="w-12 h-12 text-[#C9A24D] mb-6" />
                <h3 className="text-2xl font-light text-white mb-4">RECORDS</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  A sonic dimension where music transcends background noise and becomes a character itself.
                </p>
                <div className="space-y-2">
                  <Link to="/records" className="block text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#C9A24D] transition-colors duration-300">Film Scores</Link>
                  <Link to="/records" className="block text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#C9A24D] transition-colors duration-300">Artist Label</Link>
                  <Link to="/records" className="block text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#C9A24D] transition-colors duration-300">Vinyl Editions</Link>
                </div>
              </div>
            </div>

            {/* Pillar 3: Experience */}
            <div className={`group relative overflow-hidden rounded-lg transition-all duration-1000 delay-300 ${visibleSections.pillars ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1C2D]/50 to-[#0B1C2D]"></div>
              <div className="absolute top-4 right-4 text-8xl font-bold text-white/5">03</div>
              <div className="relative p-8 h-full min-h-[400px] flex flex-col justify-end border border-white/10 rounded-lg hover:border-[#C9A24D]/30 transition-colors duration-500">
                <Sparkles className="w-12 h-12 text-[#C9A24D] mb-6" />
                <h3 className="text-2xl font-light text-white mb-4">EXPERIENCE</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Breaking the fourth wall through digital immersion, galleries, and interactive narrative experiments.
                </p>
                <div className="space-y-2">
                  <Link to="/experience" className="block text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#C9A24D] transition-colors duration-300">Digital Galleries</Link>
                  <Link to="/experience" className="block text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#C9A24D] transition-colors duration-300">Behind The Scenes</Link>
                  <Link to="/experience" className="block text-xs tracking-[0.2em] uppercase text-white/40 hover:text-[#C9A24D] transition-colors duration-300">Experimental Lab</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ORIGINALS SECTION - STORIES UNBOUND ========== */}
      <section id="originals" data-animate className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`mb-12 transition-all duration-1000 ${visibleSections.originals ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-sm tracking-[0.4em] uppercase text-[#C9A24D]">Cinegarh Originals</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-2">Stories Unbound</h2>
          </div>

          {/* Filters */}
          <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-1000 delay-100 ${visibleSections.originals ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
                  activeFilter === filter
                    ? 'bg-[#C9A24D] text-[#0B1C2D]'
                    : 'border border-white/20 text-white/60 hover:border-[#C9A24D]/50 hover:text-[#C9A24D]'
                }`}
              >
                {filter === 'ALL' ? 'All Projects' : filter}
              </button>
            ))}
          </div>

          {/* Project Carousel */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
              {projectsData.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/originals/${project.id}`}
                  className={`group relative flex-shrink-0 w-72 md:w-80 snap-center transition-all duration-1000 delay-${index * 100} ${visibleSections.originals ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/30 to-transparent"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-[#C9A24D]/10"></div>
                      <div className="absolute inset-0 border-2 border-[#C9A24D]/30 rounded-lg"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-light text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-white/50">
                        {project.genre} • {project.year || project.type}
                      </p>
                      <div className="w-8 h-px bg-[#C9A24D] mt-4 group-hover:w-16 transition-all duration-500"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-4 mt-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9A24D] hover:text-[#C9A24D] transition-all duration-300">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9A24D] hover:text-[#C9A24D] transition-all duration-300">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== RECORDS SECTION - THE SOUND OF CINEMA ========== */}
      <section id="records" data-animate className="relative py-32 overflow-hidden">
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
            <div className={`transition-all duration-1000 ${visibleSections.records ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="text-sm tracking-[0.4em] uppercase text-[#C9A24D]">Cinegarh Records</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mt-2 mb-6">The Sound of Cinema</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Beyond the screen lies the soundscape. We produce original scores, soundtracks, 
                and immersive audio experiences that define the universe of Cinegarh.
              </p>

              {/* Featured Track */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <button className="w-14 h-14 rounded-full bg-[#C9A24D] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-[#0B1C2D] ml-1" fill="currentColor" />
                  </button>
                  <div>
                    <h4 className="text-white font-light">ECHOES OF TIME (THEME)</h4>
                    <p className="text-white/50 text-sm">Original Soundtrack • Vol. 1</p>
                  </div>
                </div>
                {/* Waveform */}
                <div className="flex items-end gap-1 h-12">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#C9A24D]/60 rounded-full"
                      style={{ height: `${20 + Math.sin(i * 0.5) * 20 + (i % 3) * 10}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Release Info */}
              <div className="flex gap-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-1">Upcoming Release</p>
                  <p className="text-white">Nov 2025</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-1">Vinyl Collection</p>
                  <p className="text-white">Limited Ed.</p>
                </div>
              </div>

              <Link
                to="/records"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] hover:bg-[#C9A24D]/20 transition-all duration-500 group mt-8"
              >
                <span className="text-sm tracking-[0.2em] uppercase">Explore Records</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Album Grid */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${visibleSections.records ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {albums.slice(0, 3).map((album, index) => (
                <Link
                  key={album.id}
                  to={`/records/${album.id}`}
                  className={`group relative aspect-square rounded-lg overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}
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

      {/* ========== EXPERIENCE SECTION - BEHIND THE LENS ========== */}
      <section id="experience" data-animate className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`mb-12 transition-all duration-1000 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-sm tracking-[0.4em] uppercase text-[#C9A24D]">Experience</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-2 mb-4">Behind The Lens</h2>
            <p className="text-lg text-white/60 max-w-2xl">
              Step beyond the screen. Explore the artistry, technology, and imagination that builds our worlds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Feature */}
            <div className={`lg:col-span-2 lg:row-span-2 group relative rounded-lg overflow-hidden transition-all duration-1000 delay-100 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img
                src="https://customer-assets.emergentagent.com/job_6ed9519c-c2d4-4479-ba33-f1b01fcff0ad/artifacts/ngjf38ee_WhatsApp%20Image%202025-12-25%20at%2021.38.47.jpeg"
                alt="THE VOID CONCEPT"
                className="w-full h-full object-cover aspect-video lg:aspect-auto min-h-[400px] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-[#0B1C2D]/30"></div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#C9A24D] text-[#0B1C2D] text-xs tracking-[0.2em] uppercase rounded">01</div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs tracking-[0.2em] uppercase text-[#C9A24D] mb-2">Visual Development</p>
                <h3 className="text-2xl font-light text-white">THE VOID CONCEPT</h3>
              </div>
            </div>

            {/* Side Cards */}
            <div className={`group relative rounded-lg overflow-hidden transition-all duration-1000 delay-200 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img
                src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80"
                alt="ON SET"
                className="w-full h-full object-cover aspect-video transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs tracking-[0.2em] uppercase text-[#C9A24D] mb-1">Production Stills</p>
                <h4 className="text-lg text-white">ON SET</h4>
              </div>
            </div>

            <div className={`group relative rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-full h-full aspect-video bg-[#123A4A]/50 flex flex-col items-center justify-center border border-white/10 rounded-lg hover:border-[#C9A24D]/30 transition-colors duration-500">
                <Sparkles className="w-12 h-12 text-[#C9A24D] mb-4" />
                <p className="text-xs tracking-[0.2em] uppercase text-[#C9A24D] mb-1">Experimental FX</p>
                <h4 className="text-lg text-white">R&D LAB</h4>
                <p className="text-xs text-white/40 mt-2">AI GENERATION</p>
              </div>
            </div>
          </div>

          <Link to="/experience" className="inline-flex items-center gap-2 text-[#C9A24D] text-sm tracking-[0.2em] uppercase mt-8 group">
            <span>Scroll to Explore</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* ========== COMMUNITY SECTION - BUILD THE UNIVERSE ========== */}
      <section id="community" data-animate className="relative py-32 bg-[#123A4A]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={`transition-all duration-1000 ${visibleSections.community ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="text-sm tracking-[0.4em] uppercase text-[#C9A24D]">Community</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mt-2 mb-6">Build The Universe</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-12">
                Cinegarh is not just a studio; it is a collective. Join a global network of creators, 
                fans, and storytellers shaping the next era of cinema.
              </p>

              {/* Action Cards */}
              <div className="space-y-4">
                <Link to="/community" className="group flex items-center justify-between p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#C9A24D]/30 transition-all duration-500">
                  <div>
                    <h4 className="text-white font-light mb-1">Creator Portal</h4>
                    <p className="text-sm text-white/50">Submit Scripts & Portfolios</p>
                  </div>
                  <ArrowRight className="text-[#C9A24D] group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link to="/community" className="group flex items-center justify-between p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#C9A24D]/30 transition-all duration-500">
                  <div>
                    <h4 className="text-white font-light mb-1">Fan Creations</h4>
                    <p className="text-sm text-white/50">Explore Art & Theories</p>
                  </div>
                  <ArrowRight className="text-[#C9A24D] group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link to="/community" className="group flex items-center justify-between p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#C9A24D]/30 transition-all duration-500">
                  <div>
                    <h4 className="text-white font-light mb-1">Events & Screenings</h4>
                    <p className="text-sm text-white/50">Upcoming Premieres</p>
                  </div>
                  <ArrowRight className="text-[#C9A24D] group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Stats & Visuals */}
            <div className={`transition-all duration-1000 delay-200 ${visibleSections.community ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                  <Users className="w-6 h-6 text-[#C9A24D] mx-auto mb-2" />
                  <p className="text-2xl font-light text-white">50K+</p>
                  <p className="text-xs text-white/50">Creators</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-2xl font-light text-white">1.2M</p>
                  <p className="text-xs text-white/50">Community</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-6 h-6 text-[#C9A24D] mx-auto mb-2" />
                  <p className="text-2xl font-light text-white">15</p>
                  <p className="text-xs text-white/50">Countries</p>
                </div>
              </div>

              {/* Community Grid */}
              <div className="grid grid-cols-2 gap-4">
                {communityHighlights.slice(0, 3).map((item, index) => (
                  <div
                    key={item.id}
                    className={`group relative rounded-lg overflow-hidden ${index === 0 ? 'row-span-2' : ''}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${index === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/90 via-[#0B1C2D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR DIVISIONS SECTION ========== */}
      <section id="divisions" data-animate className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.divisions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-sm tracking-[0.4em] uppercase text-[#C9A24D]">Our Divisions</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-2">The Cinegarh Universe</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'CINEGARH ORIGINALS', desc: 'Films, Series & Experimental Works', link: '/originals', image: 'https://customer-assets.emergentagent.com/job_6ed9519c-c2d4-4479-ba33-f1b01fcff0ad/artifacts/ngjf38ee_WhatsApp%20Image%202025-12-25%20at%2021.38.47.jpeg' },
              { title: 'CINEGARH RECORDS', desc: 'Original Scores & Music', link: '/records', image: 'https://customer-assets.emergentagent.com/job_6ed9519c-c2d4-4479-ba33-f1b01fcff0ad/artifacts/905k2b9k_WhatsApp%20Image%202025-12-25%20at%2021.38.47%20%281%29.jpeg' },
              { title: 'CINEGARH COMMUNITY', desc: 'Creators & Fans United', link: '/community', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80' },
            ].map((division, index) => (
              <Link
                key={index}
                to={division.link}
                className={`group relative aspect-[3/4] rounded-lg overflow-hidden transition-all duration-1000 delay-${index * 100} ${visibleSections.divisions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <img
                  src={division.image}
                  alt={division.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-light text-white mb-2">{division.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{division.desc}</p>
                  <span className="flex items-center gap-2 text-[#C9A24D] text-sm tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== THE INVITATION SECTION ========== */}
      <section id="invitation" data-animate className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D] via-[#123A4A]/20 to-[#0B1C2D]"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className={`text-center transition-all duration-1000 ${visibleSections.invitation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#C9A24D]"></div>
              <span className="text-sm tracking-[0.4em] uppercase text-[#C9A24D]">The Invitation</span>
              <div className="w-12 h-px bg-[#C9A24D]"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4">
              ENTER THE <span className="text-[#C9A24D]">CINEGARH UNIVERSE</span>
            </h2>
            <p className="text-white/60 tracking-[0.2em] uppercase mb-12">
              Originals • Records • Experiences
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { icon: Handshake, label: 'Collaborate' },
                { icon: DollarSign, label: 'Finance' },
                { icon: Truck, label: 'Distribute' },
                { icon: Zap, label: 'Create' },
              ].map((action, index) => (
                <Link
                  key={index}
                  to="/contact"
                  className="group flex flex-col items-center gap-3 p-6 border border-[#C9A24D]/30 rounded-lg hover:bg-[#C9A24D]/10 transition-all duration-500"
                >
                  <action.icon className="w-8 h-8 text-[#C9A24D]" />
                  <span className="text-white text-sm tracking-[0.2em] uppercase">{action.label}</span>
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="mailto:contact@cinegarh.com" className="block text-white hover:text-[#C9A24D] transition-colors duration-300">
                CONTACT@CINEGARH.COM
              </a>
              <p className="text-white/50 text-sm tracking-[0.2em]">
                MUMBAI • LOS ANGELES • LONDON
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
