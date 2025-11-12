'use client';

import { Star, ArrowLeft, Share2, Twitter, Facebook, Instagram } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Review } from '../data/reviewsData';
import { motion } from 'motion/react';
import { WaveformDivider } from '../components/WaveformDivider';

interface ReviewDetailPageProps {
  reviewId: number;
  onNavigate: (page: string) => void;
  reviews: Review[];
}

export function ReviewDetailPage({ reviewId, onNavigate, reviews }: ReviewDetailPageProps) {
  const review = reviews.find((r) => r.id === reviewId);

  if (!review) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-32 text-center">
        <h1 className="text-4xl mb-4">Review Not Found</h1>
        <button
          onClick={() => onNavigate('home')}
          className="px-6 py-3 bg-primary rounded-xl"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <main className="pt-24">
      {/* Back Button */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('reviews')}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Reviews
        </motion.button>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <ImageWithFallback
            src={review.imageUrl}
            alt={`${review.title} by ${review.artist}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full mb-6"
            >
              <span className="text-secondary uppercase tracking-wider text-sm">
                {review.genre}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {review.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl text-foreground/80 mb-6"
            >
              {review.artist}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                {[...Array(10)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'fill-primary stroke-primary'
                        : 'fill-none stroke-muted-foreground'
                    }`}
                  />
                ))}
                <span className="ml-2 text-xl">{review.rating}/10</span>
              </div>
              <span className="text-muted-foreground">{review.date}</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <WaveformDivider />

      {/* Content Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Review Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="prose prose-invert prose-lg max-w-none mb-12"
          >
            {review.fullContent?.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Embedded Players */}
          {(review.youtubeUrl || review.spotifyUrl) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12 space-y-6"
            >
              <h3
                className="text-2xl mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Listen Now
              </h3>

              {review.youtubeUrl && (
                <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${review.youtubeUrl}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}

              {review.spotifyUrl && (
                <div className="rounded-2xl overflow-hidden bg-card border border-border p-4">
                  <p className="text-muted-foreground text-center">
                    Spotify Player - {review.title}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Share2 className="w-5 h-5 text-primary" />
              <h3
                className="text-2xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Share This Review
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 rounded-xl transition-colors">
                <Twitter className="w-5 h-5" />
                Twitter
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl transition-colors">
                <Instagram className="w-5 h-5" />
                Instagram
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] hover:bg-[#1877F2]/90 rounded-xl transition-colors">
                <Facebook className="w-5 h-5" />
                Facebook
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveformDivider />

      {/* Related Reviews */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <h3
          className="text-3xl mb-8 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          More Reviews
        </h3>
        <div className="flex justify-center">
          <button
            onClick={() => onNavigate('reviews')}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            View All Reviews
          </button>
        </div>
      </div>
    </main>
  );
}
