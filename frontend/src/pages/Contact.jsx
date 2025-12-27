import React, { useState } from 'react';
import { Send, MapPin, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  return (
    <div className="bg-[#0B1C2D] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">Contact</h1>
          <p className="text-4xl md:text-5xl font-extralight text-white">Let's Collaborate</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              Whether you're interested in collaborating on a project, licensing our content, 
              or simply want to connect, we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#C9A24D]" />
                </div>
                <div>
                  <h3 className="text-white font-light mb-1">Email Us</h3>
                  <p className="text-white/50">hello@cinegarh.com</p>
                  <p className="text-white/50">press@cinegarh.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C9A24D]" />
                </div>
                <div>
                  <h3 className="text-white font-light mb-1">Studio Location</h3>
                  <p className="text-white/50">Los Angeles, California</p>
                  <p className="text-white/50">United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#C9A24D]" />
                </div>
                <div>
                  <h3 className="text-white font-light mb-1">Social</h3>
                  <div className="flex gap-4 text-white/50">
                    <a href="#" className="hover:text-[#C9A24D] transition-colors duration-300">Instagram</a>
                    <a href="#" className="hover:text-[#C9A24D] transition-colors duration-300">Twitter</a>
                    <a href="#" className="hover:text-[#C9A24D] transition-colors duration-300">YouTube</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration Types */}
            <div className="mt-16">
              <h3 className="text-sm tracking-[0.3em] uppercase text-[#C9A24D] mb-6">We Work With</h3>
              <div className="flex flex-wrap gap-3">
                {['Filmmakers', 'Musicians', 'Writers', 'Studios', 'Brands', 'Artists'].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 border border-white/20 rounded-full text-sm text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#123A4A]/20 rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-light text-white mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label className="text-sm tracking-[0.2em] uppercase text-white/40 mb-3 block">Inquiry Type</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: 'general', label: 'General' },
                    { value: 'collaboration', label: 'Collaboration' },
                    { value: 'press', label: 'Press' },
                    { value: 'licensing', label: 'Licensing' }
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: type.value })}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                        formData.type === type.value
                          ? 'bg-[#C9A24D] text-[#0B1C2D]'
                          : 'border border-white/20 text-white/60 hover:border-[#C9A24D]/50'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

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
                <label className="text-sm tracking-[0.2em] uppercase text-white/40 mb-2 block">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#C9A24D]/50 transition-colors duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="text-sm tracking-[0.2em] uppercase text-white/40 mb-2 block">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#C9A24D]/50 transition-colors duration-300 h-40 resize-none"
                  placeholder="Tell us more..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A24D] rounded-full text-[#0B1C2D] font-medium hover:bg-[#d4b05e] transition-all duration-500"
              >
                <Send size={18} />
                <span className="tracking-[0.1em] uppercase">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;