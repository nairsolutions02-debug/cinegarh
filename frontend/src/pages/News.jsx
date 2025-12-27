import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { newsItems } from '../data/mock';

const News = () => {
  const allNews = [
    ...newsItems,
    {
      id: 4,
      title: 'CINEGARH Community Reaches 10K Members',
      date: '2024-12-05',
      excerpt: 'A milestone celebration of our growing family of creators and enthusiasts.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      category: 'Community'
    },
    {
      id: 5,
      title: 'New Original Series Announcement',
      date: '2024-12-01',
      excerpt: 'Introducing our most ambitious storytelling project yet.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
      category: 'Announcement'
    },
    {
      id: 6,
      title: 'The Art of Sound Design',
      date: '2024-11-28',
      excerpt: 'A deep dive into how we craft the sonic landscapes of our films.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
      category: 'Production'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-[#0B1C2D] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-sm tracking-[0.4em] uppercase text-[#C9A24D] mb-4">News & Insights</h1>
          <p className="text-4xl md:text-5xl font-extralight text-white">Stories From The Studio</p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Link to="#" className="group block">
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-6">
              <img
                src={allNews[0].image}
                alt={allNews[0].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/30 to-transparent"></div>
              <div className="absolute inset-0 bg-[#C9A24D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-1 bg-[#C9A24D] text-[#0B1C2D] text-xs tracking-[0.2em] uppercase rounded-full">
                    {allNews[0].category}
                  </span>
                  <span className="flex items-center gap-2 text-white/50 text-sm">
                    <Clock size={14} />
                    {formatDate(allNews[0].date)}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4 group-hover:text-[#C9A24D] transition-colors duration-300">
                  {allNews[0].title}
                </h2>
                <p className="text-lg text-white/60 max-w-2xl">{allNews[0].excerpt}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.slice(1).map((article) => (
            <Link key={article.id} to="#" className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C9A24D]/20 text-[#C9A24D] text-xs tracking-[0.2em] uppercase rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm mb-2">
                <Clock size={14} />
                {formatDate(article.date)}
              </div>
              <h3 className="text-xl font-light text-white mb-2 group-hover:text-[#C9A24D] transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-sm text-white/50 line-clamp-2">{article.excerpt}</p>
              
              <div className="mt-4 flex items-center gap-2 text-[#C9A24D] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-sm tracking-[0.2em] uppercase">Read More</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-24 p-12 rounded-lg bg-[#123A4A]/30 border border-white/10 text-center">
          <h3 className="text-2xl font-light text-white mb-4">Stay Updated</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Get the latest news, behind-the-scenes content, and exclusive updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-[#C9A24D]/50 transition-colors duration-300"
            />
            <button className="px-8 py-4 bg-[#C9A24D] rounded-full text-[#0B1C2D] font-medium hover:bg-[#d4b05e] transition-all duration-500">
              <span className="tracking-[0.1em] uppercase">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;