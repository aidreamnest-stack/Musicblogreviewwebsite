'use client';

import { useState } from 'react';
import { ModernReviewCard } from '../components/ModernReviewCard';
import { genres, Review } from '../data/reviewsData';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (page: string, reviewId?: number) => void;
  reviews: Review[];
}

export function ReviewsPage({ onNavigate, reviews }: ReviewsPageProps) {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredReviews = reviews.filter((review) => {
    const matchesGenre =
      selectedGenre === 'All Genres' || review.genre === selectedGenre;
    const matchesSearch =
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

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
          All Reviews
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Explore our complete collection of music reviews
        </p>

        {/* Search and Filter Section */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by album or artist..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Genre Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedGenre === genre
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                    : 'bg-card border border-border hover:border-primary/50'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-center text-muted-foreground mb-8">
          Showing {filteredReviews.length}{' '}
          {filteredReviews.length === 1 ? 'review' : 'reviews'}
        </p>

        {/* Reviews Grid */}
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredReviews.map((review, index) => (
              <div key={review.id} onClick={() => onNavigate('review', review.id)}>
                <ModernReviewCard {...review} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground mb-4">No reviews found</p>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </motion.div>
    </main>
  );
}
