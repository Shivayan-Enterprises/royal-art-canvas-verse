
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  
  // Enhanced page variants with more dramatic effects
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.5
      }
    }
  };

  // Enhanced overlay variants with gold-red gradient
  const overlayVariants = {
    initial: { scaleY: 1 },
    animate: { 
      scaleY: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    exit: {
      scaleY: 1,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };
  
  // Red accent line animation
  const accentLineVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    exit: {
      scaleX: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className="min-h-screen relative"
      >
        {/* Main overlay - Gold gradient */}
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-gradient-to-br from-gold to-gold-dark origin-top z-50"
        />
        
        {/* Secondary overlay - Red accent */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ 
            scaleY: 0,
            transition: {
              duration: 0.8,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
          exit={{ 
            scaleY: 1,
            transition: {
              duration: 0.6,
              delay: 0.05,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
          className="fixed inset-0 bg-red-500 origin-bottom z-40"
        />
        
        {/* Horizontal accent line */}
        <motion.div 
          variants={accentLineVariants}
          className="fixed top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent origin-left z-30"
        />
        
        {/* Content */}
        {children}
        
        {/* Bottom accent line appears after content loads */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: 1, 
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: 1,
              ease: "easeOut"
            }
          }}
          className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-gold to-red-500 origin-left z-30"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
