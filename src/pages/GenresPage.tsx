'use client';

import { motion } from 'motion/react';
import { genres, Review } from '../data/reviewsData';
import { Music, Disc3, Radio, Headphones } from 'lucide-react';

interface GenresPageProps {
  onNavigate: (page: string) => void;
  reviews: Review[];
}

const genreIcons: { [key: string]: any } = {
  Electronic: Disc3,
  'Hip Hop': Radio,
  'Indie Rock': Music,
  'Jazz Fusion': Headphones,
  Folk: Music,
  Alternative: Music,
  Synthwave: Disc3,
  Pop: Radio,
  'R&B': Music,
  Metal: Music,
  Classical: Music,
};

export function GenresPage({ onNavigate, reviews }: GenresPageProps) {
  const getReviewCountByGenre = (genre: string) => {
    if (genre === 'All Genres') return reviews.length;
    return reviews.filter((r) => r.genre === genre).length;
  };

  const genreColors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-yellow-500 to-orange-500',
    'from-teal-500 to-green-500',
  ];

  return (
    <main className="container mx-auto px-4 lg:px-8 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-5xl lg:text-7xl mb-4 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Explore Genres
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Discover music across all genres. From electronic beats to acoustic melodies,
          find your next favorite sound.
        </p>

        {/* Genre Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {genres
            .filter((g) => g !== 'All Genres')
            .map((genre, index) => {
              const Icon = genreIcons[genre] || Music;
              const reviewCount = getReviewCountByGenre(genre);
              const colorClass =
                genreColors[index % genreColors.length];

              return (
                <motion.div
                  key={genre}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-card border border-border rounded-2xl p-8 overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Genre Name */}
                    <h3
                      className="text-2xl mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {genre}
                    </h3>

                    {/* Review Count */}
                    <p className="text-muted-foreground">
                      {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}
                    </p>

                    {/* Explore Button */}
                    <button
                      onClick={() => onNavigate('reviews')}
                      className="mt-6 px-6 py-2.5 bg-muted group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary rounded-xl transition-all duration-300"
                    >
                      Explore
                    </button>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
                </motion.div>
              );
            })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {reviews.length}+
              </div>
              <p className="text-muted-foreground">Total Reviews</p>
            </div>
            <div>
              <div className="text-5xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {genres.length - 1}+
              </div>
              <p className="text-muted-foreground">Genres Covered</p>
            </div>
            <div>
              <div className="text-5xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                10/10
              </div>
              <p className="text-muted-foreground">Rating System</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Can't find the genre you're looking for?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Suggest a Genre
          </button>
        </div>
      </motion.div>
    </main>
  );
}
