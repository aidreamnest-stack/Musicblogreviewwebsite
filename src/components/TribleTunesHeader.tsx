'use client';

import { useState, useEffect } from 'react';
import { Menu, Music2, Moon, Sun } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { motion } from 'motion/react';

interface TribleTunesHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function TribleTunesHeader({ currentPage, onNavigate }: TribleTunesHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Music2 className="w-8 h-8 text-primary" />
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <span className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                TribleTunes <span className="text-primary">Reviews</span>
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => onNavigate('home')}
                className={`transition-colors relative group ${
                  currentPage === 'home' ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  currentPage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
              <button
                onClick={() => onNavigate('reviews')}
                className={`transition-colors relative group ${
                  currentPage === 'reviews' || currentPage === 'review' ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                Reviews
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  currentPage === 'reviews' || currentPage === 'review' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
              <button
                onClick={() => onNavigate('genres')}
                className={`transition-colors relative group ${
                  currentPage === 'genres' ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                Genres
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  currentPage === 'genres' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className={`transition-colors relative group ${
                  currentPage === 'about' ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  currentPage === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className={`transition-colors relative group ${
                  currentPage === 'contact' ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  currentPage === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </motion.button>

              <motion.button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigate={(page) => {
          onNavigate(page);
          setIsMenuOpen(false);
        }}
        currentPage={currentPage}
      />
    </>
  );
}
