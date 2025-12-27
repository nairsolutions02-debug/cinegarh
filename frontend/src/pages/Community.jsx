import React, { useState } from 'react';
import { Send, Upload, Users, Calendar, Award } from 'lucide-react';
import { communityHighlights } from '../data/mock';

const Community = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    type: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    alert('Thank you for your submission! We will review it shortly.');
    setFormData({ name: '', email: '', title: '', type: '', description: '' });
  };

  return (
    <div className="bg-[#0B1C2D] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Community</h1>
          <p className="text-4xl md:text-5xl font-extralight text-white">Join The Universe</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, value: '12K+', label: 'Community Members' },
            { icon: Award, value: '500+', label: 'Fan Creations' },
            { icon: Calendar, value: '24', label: 'Events Hosted' },
            { icon: Upload, value: '150+', label: 'Submissions' },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-lg border border-white/10 bg-white/5 text-center">
              <stat.icon className="w-8 h-8 text-[#C9A24D] mx-auto mb-4" />
              <p className="text-3xl font-light text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {['gallery', 'submit', 'events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-500 ${
                activeTab === tab
                  ? 'bg-[#C9A24D] text-[#0B1C2D]'
                  : 'border border-white/20 text-white/60 hover:border-[#C9A24D]/50 hover:text-[#C9A24D]'
              }`}
            >
              {tab === 'gallery' && 'Fan Gallery'}
              {tab === 'submit' && 'Submit Work'}
              {tab === 'events' && 'Events'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[60vh]">
          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...communityHighlights, ...communityHighlights].map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-xs tracking-[0.2em] uppercase text-[#C9A24D]">{item.type}</span>
                    <h4 className="text-lg text-white font-light">{item.title}</h4>
                    <p className="text-sm text-white/50">by {item.creator}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Submit Tab */}
          {activeTab === 'submit' && (
            <div className="max-w-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-white mb-4">Share Your Vision</h3>
                <p className="text-white/60">
                  We celebrate the creativity of our community. Submit your fan art, short films, music covers, 
                  or any creative work inspired by CINEGARH originals.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm tracking-[0.2em] uppercase text-white/40 mb-2 block">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#C9A24D]/50 transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm tracking-[0.2em] uppercase text-white/40 mb-2 block">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#C9A24D]/50 transition-colors duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm tracking-[0.2em] uppercase text-white/40 mb-2 block">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#C9A24D]/50 transition-colors duration-300"
                    placeholder="Title of your work"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm tracking-[0.2em] uppercase text-white/40 mb-2 block">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#C9A24D]/50 transition-colors duration-300"
                    required
                  >
                    <option value="" className="bg-[#0B1C2D]">Select type</option>
                    <option value="fan-art" className="bg-[#0B1C2D]">Fan Art</option>
                    <option value="short-film" className="bg-[#0B1C2D]">Short Film</option>
                    <option value="music" className="bg-[#0B1C2D]">Music Cover</option>
                    <option value="writing" className="bg-[#0B1C2D]">Writing / Story</option>
                    <option value="other" className="bg-[#0B1C2D]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm tracking-[0.2em] uppercase text-white/40 mb-2 block">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#C9A24D]/50 transition-colors duration-300 h-32 resize-none"
                    placeholder="Tell us about your creation..."
                    required
                  ></textarea>
                </div>

                {/* File Upload */}
                <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-[#C9A24D]/30 transition-colors duration-300">
                  <Upload className="w-12 h-12 text-[#C9A24D] mx-auto mb-4" />
                  <p className="text-white/60 mb-2">Drag and drop your files here</p>
                  <p className="text-sm text-white/30">or click to browse</p>
                  <input type="file" className="hidden" />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A24D] rounded-full text-[#0B1C2D] font-medium hover:bg-[#d4b05e] transition-all duration-500"
                >
                  <Send size={18} />
                  <span className="tracking-[0.1em] uppercase">Submit</span>
                </button>
              </form>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'The Last Horizon - Premiere Screening',
                  date: 'January 15, 2025',
                  location: 'Los Angeles, CA',
                  type: 'Screening',
                  image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80'
                },
                {
                  title: 'Filmmaker Workshop: Cinematic Lighting',
                  date: 'February 8, 2025',
                  location: 'Virtual Event',
                  type: 'Workshop',
                  image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80'
                },
                {
                  title: 'Community Meetup: NYC',
                  date: 'March 22, 2025',
                  location: 'New York, NY',
                  type: 'Meetup',
                  image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
                },
                {
                  title: 'CINEGARH Records Live',
                  date: 'April 5, 2025',
                  location: 'London, UK',
                  type: 'Concert',
                  image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80'
                }
              ].map((event, index) => (
                <div
                  key={index}
                  className="group relative rounded-lg overflow-hidden border border-white/10 hover:border-[#C9A24D]/30 transition-all duration-500"
                >
                  <div className="aspect-video">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#C9A24D]/20 text-[#C9A24D] text-xs tracking-[0.2em] uppercase rounded-full mb-3">
                      {event.type}
                    </span>
                    <h4 className="text-xl font-light text-white mb-2">{event.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-white/50">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;