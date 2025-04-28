
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  
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
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.000],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.3
      }
    }
  };

  const overlayVariants = {
    initial: { scaleY: 1 },
    animate: { 
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.000]
      }
    },
    exit: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.000]
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
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-gold origin-top z-50"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
