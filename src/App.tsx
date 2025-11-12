'use client';

import { useState, useEffect } from 'react';
import { TribleTunesHeader } from './components/TribleTunesHeader';
import { TribleTunesFooter } from './components/TribleTunesFooter';
import { HomePage } from './pages/HomePage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ReviewDetailPage } from './pages/ReviewDetailPage';
import { GenresPage } from './pages/GenresPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AddReviewPage } from './pages/AddReviewPage';
import { Toaster } from 'sonner@2.0.3';
import { reviewsData as initialReviewsData, Review } from './data/reviewsData';
import { Plus } from 'lucide-react';
import { motion } from 'motion/react';

type Page = 'home' | 'reviews' | 'review' | 'genres' | 'about' | 'contact' | 'add-review';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
  const [reviews, setReviews] = useState<Review[]>(initialReviewsData);

  const addReview = (newReview: Review) => {
    setReviews([newReview, ...reviews]);
  };

  const navigate = (page: string, reviewId?: number) => {
    setCurrentPage(page as Page);
    if (reviewId !== undefined) {
      setSelectedReviewId(reviewId);
    }
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Simple routing based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const [page, id] = hash.split('/');
        if (page === 'review' && id) {
          navigate('review', parseInt(id));
        } else if (['home', 'reviews', 'genres', 'about', 'contact'].includes(page)) {
          navigate(page);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when page changes
  useEffect(() => {
    if (currentPage === 'review' && selectedReviewId) {
      window.location.hash = `review/${selectedReviewId}`;
    } else if (currentPage !== 'home') {
      window.location.hash = currentPage;
    } else {
      window.location.hash = '';
    }
  }, [currentPage, selectedReviewId]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} reviews={reviews} />;
      case 'reviews':
        return <ReviewsPage onNavigate={navigate} reviews={reviews} />;
      case 'review':
        return selectedReviewId ? (
          <ReviewDetailPage reviewId={selectedReviewId} onNavigate={navigate} reviews={reviews} />
        ) : (
          <ReviewsPage onNavigate={navigate} reviews={reviews} />
        );
      case 'genres':
        return <GenresPage onNavigate={navigate} reviews={reviews} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      case 'add-review':
        return <AddReviewPage onNavigate={navigate} onAddReview={addReview} />;
      default:
        return <HomePage onNavigate={navigate} reviews={reviews} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" theme="dark" />
      <TribleTunesHeader currentPage={currentPage} onNavigate={navigate} />
      {renderPage()}
      <TribleTunesFooter />

      {/* Floating Add Review Button */}
      {currentPage !== 'add-review' && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('add-review')}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg shadow-primary/50 flex items-center justify-center z-50 hover:shadow-xl hover:shadow-primary/70 transition-all duration-300"
          aria-label="Add new review"
          title="Add New Review"
        >
          <Plus className="w-8 h-8" />
        </motion.button>
      )}
    </div>
  );
}
