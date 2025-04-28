
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-serif mb-12 text-center"
        >
          Gallery Collection
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <Link to={`/artwork/${item}`}>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={`https://source.unsplash.com/random/800x600?art,${item}`}
                    alt={`Artwork ${item}`}
                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Gallery;
