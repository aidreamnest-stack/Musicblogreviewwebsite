'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Save } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { reviewsData, genres } from '../data/reviewsData';

interface AddReviewPageProps {
  onNavigate: (page: string) => void;
  onAddReview: (review: any) => void;
}

export function AddReviewPage({ onNavigate, onAddReview }: AddReviewPageProps) {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: 'Electronic',
    rating: 8,
    imageUrl: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MXx8fHwxNzYyODY2OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: '',
    fullContent: '',
    youtubeUrl: '',
    spotifyUrl: '',
    isFeatured: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newReview = {
      id: reviewsData.length + 1,
      ...formData,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
    };

    onAddReview(newReview);
    toast.success(`Review for "${formData.title}" added successfully!`);
    
    // Reset form
    setFormData({
      title: '',
      artist: '',
      genre: 'Electronic',
      rating: 8,
      imageUrl: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MXx8fHwxNzYyODY2OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: '',
      fullContent: '',
      youtubeUrl: '',
      spotifyUrl: '',
      isFeatured: false,
    });

    // Navigate to home to see the new review
    setTimeout(() => {
      onNavigate('home');
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (name === 'rating') {
      setFormData({
        ...formData,
        [name]: parseInt(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <main className="container mx-auto px-4 lg:px-8 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
            <span className="text-primary uppercase tracking-wider text-sm">
              Admin Panel
            </span>
          </div>
          <h1
            className="text-5xl lg:text-7xl mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Add New Review
          </h1>
          <p className="text-muted-foreground text-lg">
            Create a new music review to publish on the homepage
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block mb-2">
                Album/Song Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., Midnight Echoes"
              />
            </div>

            {/* Artist */}
            <div>
              <label htmlFor="artist" className="block mb-2">
                Artist Name *
              </label>
              <input
                type="text"
                id="artist"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., Luna Wave"
              />
            </div>

            {/* Genre */}
            <div>
              <label htmlFor="genre" className="block mb-2">
                Genre *
              </label>
              <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {genres.filter(g => g !== 'All Genres').map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label htmlFor="rating" className="block mb-2">
                Rating (1-10) *
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                min="1"
                max="10"
                value={formData.rating}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="imageUrl" className="block mb-2">
              Cover Image URL *
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block mb-2">
              Short Excerpt *
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="A brief description that will appear on cards..."
            />
          </div>

          {/* Full Content */}
          <div>
            <label htmlFor="fullContent" className="block mb-2">
              Full Review Content *
            </label>
            <textarea
              id="fullContent"
              name="fullContent"
              value={formData.fullContent}
              onChange={handleChange}
              required
              rows={8}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Write your full review here. Use double line breaks for paragraphs..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* YouTube URL */}
            <div>
              <label htmlFor="youtubeUrl" className="block mb-2">
                YouTube Video ID (optional)
              </label>
              <input
                type="text"
                id="youtubeUrl"
                name="youtubeUrl"
                value={formData.youtubeUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., dQw4w9WgXcQ"
              />
            </div>

            {/* Spotify URL */}
            <div>
              <label htmlFor="spotifyUrl" className="block mb-2">
                Spotify URL (optional)
              </label>
              <input
                type="url"
                id="spotifyUrl"
                name="spotifyUrl"
                value={formData.spotifyUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://open.spotify.com/..."
              />
            </div>
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="isFeatured"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              className="w-5 h-5 rounded border-border bg-background focus:ring-2 focus:ring-primary"
            />
            <label htmlFor="isFeatured" className="cursor-pointer">
              Feature this review on the homepage
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Publish Review
            </motion.button>
            <motion.button
              type="button"
              onClick={() => onNavigate('home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-card border border-border rounded-xl hover:bg-muted transition-all duration-300"
            >
              Cancel
            </motion.button>
          </div>
        </form>

        {/* Info Box */}
        <div className="mt-8 bg-primary/10 border border-primary/30 rounded-2xl p-6">
          <h3 className="mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            💡 Tips for Writing Great Reviews
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Be honest and authentic in your opinions</li>
            <li>• Provide context about the artist and album</li>
            <li>• Discuss specific tracks and production elements</li>
            <li>• Consider both strengths and weaknesses</li>
            <li>• Keep paragraphs concise and readable</li>
          </ul>
        </div>
      </motion.div>
    </main>
  );
}
