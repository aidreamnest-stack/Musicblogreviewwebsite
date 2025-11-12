'use client';

import { Star, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface FeaturedReviewProps {
  title: string;
  artist: string;
  genre: string;
  rating: number;
  description: string;
  imageUrl: string;
}

export function FeaturedReview({
  title,
  artist,
  genre,
  rating,
  description,
  imageUrl,
}: FeaturedReviewProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl mt-24"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={imageUrl}
          alt={`${title} by ${artist}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6"
          >
            <span className="text-primary uppercase tracking-wider text-sm">
              Featured Review
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl lg:text-7xl mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl lg:text-3xl text-foreground/80 mb-6"
          >
            {artist}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2">
              {[...Array(10)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < rating
                      ? 'fill-primary stroke-primary'
                      : 'fill-none stroke-muted-foreground'
                  }`}
                />
              ))}
              <span className="ml-2 text-xl">{rating}/10</span>
            </div>
            <span className="px-4 py-1.5 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-sm uppercase tracking-wide">
              {genre}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 group">
              Read Full Review
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-full hover:bg-card/80 transition-all duration-300">
              Listen Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.section>
  );
}
