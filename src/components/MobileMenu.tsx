import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function MobileMenu({ isOpen, onClose, onNavigate, currentPage }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-card border-l border-border z-50 p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="mt-16">
              <ul className="space-y-6">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className={`text-2xl transition-colors block ${
                      currentPage === 'home' ? 'text-primary' : 'hover:text-primary'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('reviews')}
                    className={`text-2xl transition-colors block ${
                      currentPage === 'reviews' || currentPage === 'review' ? 'text-primary' : 'hover:text-primary'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Reviews
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('genres')}
                    className={`text-2xl transition-colors block ${
                      currentPage === 'genres' ? 'text-primary' : 'hover:text-primary'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Genres
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className={`text-2xl transition-colors block ${
                      currentPage === 'about' ? 'text-primary' : 'hover:text-primary'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`text-2xl transition-colors block ${
                      currentPage === 'contact' ? 'text-primary' : 'hover:text-primary'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
