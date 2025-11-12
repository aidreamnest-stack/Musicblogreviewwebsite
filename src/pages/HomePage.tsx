'use client';

import { FeaturedReview } from '../components/FeaturedReview';
import { ModernReviewCard } from '../components/ModernReviewCard';
import { TrendingSidebar } from '../components/TrendingSidebar';
import { WaveformDivider } from '../components/WaveformDivider';
import { Review } from '../data/reviewsData';

interface HomePageProps {
  onNavigate: (page: string, reviewId?: number) => void;
  reviews: Review[];
}

export function HomePage({ onNavigate, reviews }: HomePageProps) {
  const featuredReview = reviews.find((r) => r.isFeatured) || reviews[0];
  const recentReviews = reviews.slice(0, 6);

  return (
    <main>
      {/* Featured Review Section */}
      <div className="container mx-auto px-4 lg:px-8">
        <div onClick={() => onNavigate('review', featuredReview.id)} className="cursor-pointer">
          <FeaturedReview
            title={featuredReview.title}
            artist={featuredReview.artist}
            genre={featuredReview.genre}
            rating={featuredReview.rating}
            description={featuredReview.excerpt || ''}
            imageUrl={featuredReview.imageUrl}
          />
        </div>
      </div>

      <WaveformDivider />

      {/* Recent Reviews Section with Sidebar */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Reviews Grid */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2
                className="text-4xl mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Latest Reviews
              </h2>
              <p className="text-muted-foreground text-lg">
                Fresh perspectives on the newest releases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentReviews.map((review, index) => (
                <div
                  key={review.id}
                  onClick={() => onNavigate('review', review.id)}
                >
                  <ModernReviewCard {...review} index={index} />
                </div>
              ))}
            </div>

            {/* View All Reviews Button */}
            <div className="mt-12 text-center">
              <button
                onClick={() => onNavigate('reviews')}
                className="px-8 py-4 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300"
              >
                View All Reviews
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <TrendingSidebar />
            </div>
          </div>
        </div>
      </div>

      <WaveformDivider />

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 border border-primary/30 p-12 lg:p-16">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2
              className="text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Never Miss a Beat
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter and get weekly music reviews, exclusive interviews,
              and curated playlists delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-background/50 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
      </div>
    </main>
  );
}
