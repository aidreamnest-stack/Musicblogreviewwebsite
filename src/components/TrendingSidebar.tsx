'use client';

import { TrendingUp, Award, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const trendingSongs = [
  { id: 1, title: 'Cosmic Highway', artist: 'Stellar Waves', plays: '2.4M' },
  { id: 2, title: 'Neon Dreams', artist: 'Synth Collective', plays: '1.9M' },
  { id: 3, title: 'Midnight Echo', artist: 'Luna Ray', plays: '1.7M' },
  { id: 4, title: 'Electric Soul', artist: 'Voltage', plays: '1.5M' },
  { id: 5, title: 'Rhythmic Pulse', artist: 'Beat Machine', plays: '1.2M' },
];

const topRatedAlbums = [
  { id: 1, title: 'Wavelength', artist: 'Echo Chamber', rating: 9.5 },
  { id: 2, title: 'Digital Dreams', artist: 'Cyber Punk', rating: 9.2 },
  { id: 3, title: 'Analog Heart', artist: 'The Retros', rating: 9.0 },
];

const reviewers = [
  { id: 1, name: 'Alex Rivera', reviews: 127, image: 'https://images.unsplash.com/photo-1650477250351-a7685316430f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nZXIlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5MTUxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 2, name: 'Maya Chen', reviews: 98, image: 'https://images.unsplash.com/photo-1596651047212-a1b63eeded94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1lcnxlbnwxfHx8fDE3NjI4Nzk0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 3, name: 'Jordan Blake', reviews: 85, image: 'https://images.unsplash.com/photo-1638883296886-6095d6c869d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMGd1aXRhcnxlbnwxfHx8fDE3NjI5MTQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
];

export function TrendingSidebar() {
  return (
    <aside className="space-y-8">
      {/* Trending Songs */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card border border-border rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Trending Songs
          </h3>
        </div>
        <ul className="space-y-4">
          {trendingSongs.map((song, index) => (
            <motion.li
              key={song.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <span className="text-2xl text-muted-foreground w-6" style={{ fontFamily: 'var(--font-heading)' }}>
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="truncate group-hover:text-primary transition-colors">
                  {song.title}
                </p>
                <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
              </div>
              <span className="text-sm text-muted-foreground">{song.plays}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Top Rated Albums */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card border border-border rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-secondary" />
          <h3 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Top Rated Albums
          </h3>
        </div>
        <ul className="space-y-4">
          {topRatedAlbums.map((album, index) => (
            <motion.li
              key={album.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="group-hover:text-primary transition-colors">{album.title}</p>
                <span className="text-lg text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  {album.rating}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{album.artist}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Top Reviewers */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-card border border-border rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <User className="w-5 h-5 text-primary" />
          <h3 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Top Reviewers
          </h3>
        </div>
        <ul className="space-y-4">
          {reviewers.map((reviewer, index) => (
            <motion.li
              key={reviewer.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <ImageWithFallback
                  src={reviewer.image}
                  alt={reviewer.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border group-hover:border-primary transition-colors"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate group-hover:text-primary transition-colors">
                  {reviewer.name}
                </p>
                <p className="text-sm text-muted-foreground">{reviewer.reviews} reviews</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </aside>
  );
}
