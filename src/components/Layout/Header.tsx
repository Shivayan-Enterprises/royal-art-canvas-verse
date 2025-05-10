import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, User } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <svg width="40" height="40" viewBox="0 0 312.5 312.5" className="text-gold">
              {/* Insert your SVG path data here */}
            </svg>
            <span className="ml-2 text-2xl md:text-3xl font-serif font-bold text-gold">SS</span>
            <span className="text-2xl md:text-3xl font-thin"> DIGITAL</span>
          </motion.div>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Gallery', 'About', 'Contact'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <Link 
                to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className={`text-lg hover:text-gold transition-colors relative ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                    ? 'text-gold font-medium' 
                    : 'text-foreground'
                }`}
              >
                {item}
                {location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    layoutId="underline"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="hover:text-gold transition-colors">
            <Search size={20} />
          </button>
          <Link to="/register" aria-label="Account" className="hover:text-gold transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" aria-label="Shopping cart" className="hover:text-gold transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
