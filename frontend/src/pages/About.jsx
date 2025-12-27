import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Music, Users, Sparkles, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#0B1C2D] min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/80 via-[#123A4A]/30 to-[#0B1C2D]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A24D]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-6">About CINEGARH</h1>
          <p className="text-4xl md:text-6xl font-extralight text-white leading-tight">
            We Create Stories That <span className="text-[#C9A24D]">Echo Beyond Time</span>
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4 sticky top-32">Our Story</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                CINEGARH was born from a singular vision: to create cinematic experiences that 
                transcend the boundaries of traditional storytelling. We believe that every frame 
                should carry weight, every sound should resonate, and every story should leave 
                an indelible mark on the soul.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Founded by filmmakers, musicians, and visual artists, we've built a creative 
                collective that pushes the boundaries of what's possible in visual storytelling. 
                Our work spans films, series, music, and experimental media — all unified by 
                our commitment to artistic excellence.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                We don't just make content. We craft universes. We compose emotions. We build 
                communities around the stories that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#123A4A]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Our Philosophy</h2>
            <p className="text-3xl md:text-4xl font-extralight text-white">What We Believe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Film,
                title: 'Cinematic Excellence',
                description: 'Every frame matters. We craft visuals that speak louder than words.'
              },
              {
                icon: Music,
                title: 'Sonic Storytelling',
                description: 'Sound shapes emotion. Our scores are integral to the narrative.'
              },
              {
                icon: Sparkles,
                title: 'Innovation',
                description: 'Pushing boundaries with AI, VR, and emerging technologies.'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building a universe together with creators and fans worldwide.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-lg border border-white/10 hover:border-[#C9A24D]/30 transition-all duration-500"
              >
                <value.icon className="w-10 h-10 text-[#C9A24D] mb-6" />
                <h3 className="text-xl font-light text-white mb-3">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Our Divisions</h2>
            <p className="text-3xl md:text-4xl font-extralight text-white">The CINEGARH Universe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/originals" className="group relative aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="https://customer-assets.emergentagent.com/job_6ed9519c-c2d4-4479-ba33-f1b01fcff0ad/artifacts/ngjf38ee_WhatsApp%20Image%202025-12-25%20at%2021.38.47.jpeg"
                alt="CINEGARH Originals"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light text-white mb-2">CINEGARH Originals</h3>
                <p className="text-white/60 mb-4">Films, Series & Experimental Works</p>
                <div className="flex items-center gap-2 text-[#C9A24D] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-sm tracking-[0.2em] uppercase">Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link to="/records" className="group relative aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="https://customer-assets.emergentagent.com/job_6ed9519c-c2d4-4479-ba33-f1b01fcff0ad/artifacts/905k2b9k_WhatsApp%20Image%202025-12-25%20at%2021.38.47%20%281%29.jpeg"
                alt="CINEGARH Records"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light text-white mb-2">CINEGARH Records</h3>
                <p className="text-white/60 mb-4">Original Scores & Music</p>
                <div className="flex items-center gap-2 text-[#C9A24D] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-sm tracking-[0.2em] uppercase">Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link to="/community" className="group relative aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                alt="CINEGARH Community"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light text-white mb-2">CINEGARH Community</h3>
                <p className="text-white/60 mb-4">Creators & Fans United</p>
                <div className="flex items-center gap-2 text-[#C9A24D] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-sm tracking-[0.2em] uppercase">Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Whether you're a filmmaker, musician, artist, or visionary, we're always looking 
            to connect with creative minds who share our passion for storytelling.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A24D] rounded-full text-[#0B1C2D] font-medium hover:bg-[#d4b05e] transition-all duration-500"
          >
            <span className="tracking-[0.1em] uppercase">Get In Touch</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;