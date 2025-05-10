
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-royal-dark text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-medium mb-4">SS Digital</h3>
            <p className="text-cream-dark mb-4">
              Curating fine art for distinguished collectors and enthusiasts.
              Established 1992.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream hover:text-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.232.585 1.777 1.17.586.585.92 1.15 1.17 1.777.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.17 1.777c-.5.5-1.02.834-1.777 1.083-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.777-1.17c-.5-.5-.834-1.02-1.083-1.777-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.17-1.777c.5-.5 1.02-.834 1.777-1.083.636-.247 1.363-.416 2.427-.465C9.576 2.013 9.937 2 12.315 2zm0 1.802h-.63c-2.306 0-2.647.011-3.668.058-.877.04-1.354.187-1.671.31-.421.163-.719.358-1.03.668-.313.311-.505.609-.67 1.03-.123.317-.27.794-.31 1.671-.047 1.021-.058 1.362-.058 3.668v.63c0 2.306.011 2.647.058 3.668.04.877.187 1.354.31 1.671.163.421.358.719.669 1.03.311.313.609.505 1.03.67.317.123.794.27 1.671.31 1.022.047 1.363.058 3.669.058h.63c2.306 0 2.647-.011 3.668-.058.877-.04 1.354-.187 1.671-.31.421-.163.719-.358 1.03-.669.312-.311.505-.609.67-1.03.123-.317.27-.794.31-1.671.047-1.022.058-1.363.058-3.669v-.63c0-2.306-.011-2.647-.058-3.668-.04-.877-.187-1.354-.31-1.671a2.71 2.71 0 00-.669-1.03c-.311-.312-.609-.505-1.03-.67-.317-.123-.794-.27-1.671-.31-1.021-.047-1.362-.058-3.668-.058z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/exhibitions" className="hover:text-gold transition-colors">Exhibitions</Link></li>
              <li><Link to="/artists" className="hover:text-gold transition-colors">Featured Artists</Link></li>
              <li><Link to="/collections" className="hover:text-gold transition-colors">Collections</Link></li>
              <li><Link to="/auction" className="hover:text-gold transition-colors">Auction</Link></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to receive updates on new arrivals and special offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-sm bg-royal border-0 text-cream placeholder:text-cream/70 focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button 
                type="submit" 
                className="bg-gold px-3 py-2 rounded-r-sm hover:bg-gold-dark transition-colors"
                aria-label="Subscribe"
              >
                <Mail size={18} />
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-royal text-center">
          <p className="text-cream-dark">© {new Date().getFullYear()} SS Digital . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
