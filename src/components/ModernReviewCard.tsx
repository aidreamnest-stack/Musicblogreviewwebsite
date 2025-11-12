'use client';

import { Star, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface ModernReviewCardProps {
  title: string;
  artist: string;
  genre: string;
  rating: number;
  imageUrl: string;
  date: string;
  index: number;
}

export function ModernReviewCard({
  title,
  artist,
  genre,
  rating,
  imageUrl,
  date,
  index,
}: ModernReviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={`${title} by ${artist}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
        
        {/* Genre Tag */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-secondary/90 backdrop-blur-sm text-secondary-foreground rounded-full text-xs uppercase tracking-wide">
          {genre}
        </div>

        {/* Rating Overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
          {[...Array(10)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? 'fill-primary stroke-primary'
                  : 'fill-none stroke-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3
            className="text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-1"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h3>
          <p className="text-muted-foreground">{artist}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl" style={{ fontFamily: 'var(--font-heading)' }}>
              {rating}
            </span>
            <span className="text-muted-foreground">/10</span>
          </div>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>

        {/* Read Review Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group/button"
        >
          <span>Read Review</span>
          <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
        </motion.button>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1), transparent 70%)',
        }}
      />
    </motion.article>
  );
}
